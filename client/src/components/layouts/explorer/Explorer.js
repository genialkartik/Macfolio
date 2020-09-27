
import React, { Component } from 'react'
import * as windData from '../../index'
// import axios from 'axios'

import '../terminal/terminal.css'
import './explorer.css'
import Draggable from 'react-draggable'
import $ from 'jquery'
import PropTypes from 'prop-types'

import FolderIcon from '@material-ui/icons/Folder';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import TreeView from '@material-ui/lab/TreeView';
import TreeItem from '@material-ui/lab/TreeItem';
import Typography from '@material-ui/core/Typography';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import PersonPinIcon from '@material-ui/icons/PersonPin';
import InsertDriveFileIcon from '@material-ui/icons/InsertDriveFile';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import GitHubIcon from '@material-ui/icons/GitHub';
import HorizontalSplitIcon from '@material-ui/icons/HorizontalSplit';
import LiveHelpIcon from '@material-ui/icons/LiveHelp';
import CreateIcon from '@material-ui/icons/Create';
// onrightClick 
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Modal from '@material-ui/core/Modal'


const useTreeItemStyles = makeStyles((theme) => ({
  root: {
    color: theme.palette.text.secondary,
    '&:hover > $content': {
      backgroundColor: theme.palette.action.hover,
    },
    '&:focus > $content, &$selected > $content': {
      backgroundColor: 'rgba(39, 39, 39)',
      color: 'var(--tree-view-color)',
    }
  },
  content: {
    color: theme.palette.text.secondary,
    borderTopRightRadius: theme.spacing(2),
    borderBottomRightRadius: theme.spacing(2),
    paddingRight: theme.spacing(1),
    fontWeight: theme.typography.fontWeightMedium,
    '$expanded > &': {
      fontWeight: theme.typography.fontWeightRegular,
    },
  },
  group: {
    marginLeft: 0,
    '& $content': {
      paddingLeft: theme.spacing(2),
    },
  },
  expanded: {},
  selected: {},
  label: {
    fontWeight: 'inherit',
    color: '#ffffff',
  },
  labelRoot: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0.5, 0),
  },
  labelIcon: {
    marginRight: theme.spacing(1),
  },
  labelText: {
    fontWeight: 'inherit',
    flexGrow: 1,
  },
}));

function StyledTreeItem(props) {
  const classes = useTreeItemStyles();
  const { labelText, labelIcon: LabelIcon, labelInfo, color, bgColor, ...other } = props;
  return (
    <TreeItem
      label={
        <div className={classes.labelRoot}>
          <LabelIcon color="inherit" className={classes.labelIcon} />
          <Typography variant="body2" className={classes.labelText}>
            {labelText}
          </Typography>
          <Typography variant="caption" color="inherit">
            {labelInfo}
          </Typography>
        </div>
      }
      style={{
        '--tree-view-color': color,
        '--tree-view-bg-color': bgColor,
      }}
      classes={{
        root: classes.root,
        content: classes.content,
        expanded: classes.expanded,
        selected: classes.selected,
        group: classes.group,
        label: classes.label,
      }}
      {...other}
    />
  );
}

StyledTreeItem.propTypes = {
  bgColor: PropTypes.string,
  color: PropTypes.string,
  labelIcon: PropTypes.elementType.isRequired,
  labelInfo: PropTypes.string,
  labelText: PropTypes.string.isRequired,
};

const styles = theme => ({
  root: {
    height: 264,
    flexGrow: 1,
    maxWidth: 400,
  },
  newFolderName: '',
  folder: {
    width: '160px',
    height: '200px',
    wordWrap: 'break-word',
    marginLeft: '10px',
    textAlign: 'center',
    float: 'left'
  },
  foldericon: {
    color: '#71CFFA',
    fontSize: '10em'
  },
  uploadfile: {
    position: 'absolute',
    width: 'min-width',
    height: 'min-height',
    padding: `30px`,
    left: `45%`,
    top: `45%`,
    background: `#646464`,
    borderRadius: `10px`
  }
});

class Explorer extends Component {
  constructor(props) {
    super(props)
    /////////////////////////////////////////////  STATE
    this.state = {
      // cursor position on right click
      mouseX: null,
      mouseY: null,
      rightClickedOn: null, // id of folder or File on Right Click
      selectType: null,     // file or folder
      file: null,
      filenametoUpload: null,
      isFolderSelected: false,
      uploadfileOpen: false,
      activeWindowId: null,
    }

    this.toggleContainer = React.createRef();
    this.uploadedfile = React.createRef();
    this.onClickOutsideHandler = this.onClickOutsideHandler.bind(this);
  }

  componentDidMount() {
    window.addEventListener('click', this.onClickOutsideHandler);
    this.setState({
      rightClickedOn: null,
      activeWindowId: this.props.wid
    })
  }
  componentWillUnmount() {
    window.removeEventListener('click', this.onClickOutsideHandler);

  }

  onClickOutsideHandler(event) {
    if (this.state.isFolderSelected && !this.toggleContainer.current.contains(event.target)) {
      $('#' + this.state.selectfolderName + 'icon').toggleClass('foldericonselect')
      $('#' + this.state.selectfolderName + 'name').toggleClass('foldernameselect')
      this.setState({
        isFolderSelected: false,
        selectfolderName: 'none',
        rightClickedOn: null
      })
    }
  }

  onSelectFolder(id) {
    $('#' + id + 'icon').toggleClass('foldericonselect')
    $('#' + id + 'name').toggleClass('foldernameselect')
    if (this.state.selectfolderName === id) {
      this.setState({
        isFolderSelected: false,
        selectfolderName: 'none'
      })
    }
    else {
      $('#' + this.state.selectfolderName + 'icon').toggleClass('foldericonselect')
      $('#' + this.state.selectfolderName + 'name').toggleClass('foldernameselect')
      this.setState({
        isFolderSelected: true,
        selectfolderName: id,
        onrightClick: id
      })
    }
  }
  // onDoubleClick on folder or file
  openFolder(wid, folderName, e) {

    var x = $("#wc" + wid).position();
    var tempCurrentPath = this.props.currPath.currentPath
    tempCurrentPath.push(folderName)
    var currPath = this.props.currPath.currentPath.toString().replace(/,/g, '/');
    this.props.dataExchange({
      waction: 'openFolder',
      wid: wid,
      currPath: currPath,
      currentPath: tempCurrentPath,
      diffX: x.left,
      diffY: x.top,
      zIdx: '100'
    })
  }

  // Data send back to MacOS (parent)
  closeW(clsid) {
    this.props.dataExchange({
      waction: 'closeWindow',
      wid: clsid
    })
  }

  openWindowAlt(wid, wtype, wdata, wname) {
    var x = $("#wc" + wid).position();
    this.props.dataExchange({
      waction: wtype,
      wid: wid,
      wdata: wdata,
      wname: wname,
      diffX: x.left,
      diffY: x.top
    })
  }

  openFile(wtype, id, wdata, fileStatus) {
    var x = $("#wc" + id).position();
    this.props.dataExchange({
      waction: wtype,
      wid: id,
      wdata: wdata,
      fileStatus: fileStatus,
      diffX: x.left,
      diffY: x.top
    })
  }

  changewSubTypeData(wid, oDataId, wdata, wsdata) {
    var x = $("#wc" + wid).position();
    this.props.dataExchange({
      waction: 'changewsData',
      wid: wid,
      id: oDataId,
      wdata: wdata,
      wsubtype: 'other',
      wsdata: wsdata,
      diffX: x.left,
      diffY: x.top
    })
  }
  activeWindow(wid) {
    this.setState({
      rightClickedOn: null,
      activeWindowId: wid
    })
    $('.wind-con').css({ zIndex: "100" })
    $("#wc" + wid).css({ zIndex: "1000" })
  }
  resizeWindow(wid) {
    var temp = "#wc" + wid
    var widthOfBody = parseInt($('#root').css("width"))
    var widthOfWindow = parseInt($(temp).css("width")) / widthOfBody * 100
    if (widthOfWindow <= 99) {
      $(temp).css({
        "width": "100%",
        "height": "100%",
        "top": "48px",
        "left": "0",
        "transform": "translate(0%, 0%)"
      })
      $('.wdt-right').css({
        width: widthOfBody - 235 + "px"
      })
    } else {
      $(temp).css({
        "width": "60%",
        "height": "70%",
        "top": "10%",
        "left": "20%",
        "transform": "translate(0%, 0%)"
      })
      $('.wdt-right').css({
        width: "calc(100% - 235px)"
      })
    }
  }


  onrightClick(selecttype, RightClickedOn, event) {
    event.preventDefault();
    this.setState({
      mouseX: event.clientX - 2,
      mouseY: event.clientY - 4
    });
    if (RightClickedOn != null) {
      this.setState({
        selectType: selecttype,
        rightClickedOn: RightClickedOn //set to id of the folder
      })
    }
  }
  handleClose() {
    this.setState({
      mouseX: null,
      mouseY: null,
    })
  }
  windowBack(wid) {
    var x = $("#wc" + wid).position();
    var zidx = 50;
    if (this.props.currPath.currentPath.length === 1) {
      return 1
    }
    else {
      let tempPathAr = this.props.currPath.currentPath
      let newCurentPath = tempPathAr.slice(0, -1)
      var currPath = newCurentPath.toString().replace(/,/g, '/');
      this.props.dataExchange({
        waction: 'openFolder',
        wid: wid,
        currPath: currPath,
        currentPath: newCurentPath,
        diffX: x.left,
        diffY: x.top,
        zIdx: zidx.toString()
      })
      zidx++;
    }
  }
  fileUploadonChange = e => {
    this.setState({
      file: e.target.files[0]
    })
  }
  fileNameonChange = e => {
    this.setState({
      filenametoUpload: e.target.value
    })
  }
  uploadFile = (wid, e) => {
    e.preventDefault();
    let formData = new FormData();
    formData.append('filetoupload', this.state.file)
    formData.append('filenametoupload', this.state.filenametoUpload)
    formData.append('itempath', this.props.currPath.currentPath.toString().replace(/,/g, '/'))
    this.props.dataExchange({ //sent to itemAction
      wid: wid,
      waction: 'uploadItem',
      formdata: formData //sendt to itemAction and then explorer.js in
    })
    this.setState({ uploadfileOpen: false, rightClickedOn: null })
  }



  render() {
    const { classes } = this.props
    var windConId = "wc" + this.props.wid;
    const folderitems = this.props.windowFolders
    const fileitems = this.props.windowFiles
    let Wdata;
    if (this.props.windItem === 'Connect' ||
      this.props.windItem === 'Feedback' ||
      this.props.windItem === 'Miscellaneous') {
      Wdata = windData[this.props.windItem]
    }

    return (
      <Draggable>
        <div className="wind-con" id={windConId}
          style={(this.props.winPos) ?
            (this.state.activeWindowId === this.props.winPos.id) ?
              { left: this.props.winPos.left, top: this.props.winPos.top, zIndex: this.props.winPos.zIndex } :
              {}
            : {}
          }
          onClick={this.activeWindow.bind(this, this.props.wid)} >
          <div id="wind-up-tab">
            <ul>
              <li id="closetab" className="wintab" onClick={this.closeW.bind(this, this.props.wid)}>
              </li>
              <li id="minimztab" className="wintab" onClick={this.closeW.bind(this, this.props.wid)}></li>
              <li id="tabsize" className="wintab" onClick={this.resizeWindow.bind(this, this.props.wid)}></li>
              <li id="opnd-wind-icon-thumbnail" className="opndwintab"><img src={require('../../../assets/icons/help.png')} alt="Window" /></li>
              <li className="opndwintab">{this.props.windName}</li>
            </ul>
          </div>

          <div id="wind-ter-conn">

            <div className="wind-up-low">
              <div id="wul-conn" className="wul-conn">
                <ul>
                  <li className="wbackleft" onClick={this.windowBack.bind(this, this.props.wid)} ><img src={require('../../../assets/graphics/wb-left.png')} alt="" /></li>
                  <li className="wbackmid"  ><img src={require('../../../assets/graphics/wb-mid.png')} alt="" /></li>
                  <li className="wbackright"><img src={require('../../../assets/graphics/wb-right.png')} alt="" /></li>
                </ul>
              </div>
            </div>
            <br />
            <div className="wdt-left">
              <TreeView
                className={classes.root}
                defaultExpanded={['3']}
                defaultCollapseIcon={<ArrowDropDownIcon />}
                defaultExpandIcon={<ArrowRightIcon />}
                defaultEndIcon={<div style={{ width: 24 }} />}
              >

                <StyledTreeItem nodeId="1" labelText="About Me"
                  onClick={this.openWindowAlt.bind(this, this.props.wid, 'Terminal', 'Aboutme', "AboutMe")} labelIcon={PersonPinIcon} />
                <StyledTreeItem nodeId="2" labelText="Resume"
                  onClick={this.openWindowAlt.bind(this, this.props.wid, 'Terminal', 'Resume', "Resume")} labelIcon={InsertDriveFileIcon} />
                <StyledTreeItem nodeId="3" labelText="Social"
                  labelIcon={SupervisorAccountIcon}>
                  <StyledTreeItem
                    nodeId="6"
                    labelText="Twitter"
                    labelIcon={TwitterIcon}
                    labelInfo="90"
                    color="#1a73e8"
                    bgColor="#e8f0fe"
                    onClick={this.changewSubTypeData.bind(this, this.props.wid, this.props.otherData.id, 'Connect', 'twitter')}
                  />
                  <StyledTreeItem
                    nodeId="7"
                    labelText="Dev.to"
                    labelIcon={CreateIcon}
                    labelInfo="3"
                    color="#e3742f"
                    bgColor="#fcefe3"
                    onClick={this.changewSubTypeData.bind(this, this.props.wid, this.props.otherData.id, 'Connect', 'devtoblogs')}
                  />
                  <StyledTreeItem
                    nodeId="8"
                    labelText="Stack Overflow"
                    labelIcon={HorizontalSplitIcon}
                    labelInfo="940"
                    color="#a250f5"
                    bgColor="#f3e8fd"
                    onClick={this.changewSubTypeData.bind(this, this.props.wid, this.props.otherData.id, 'Connect', 'stackoverflow')}
                  />
                  <StyledTreeItem
                    nodeId="9"
                    labelText="Instagram"
                    labelIcon={InstagramIcon}
                    labelInfo="240"
                    color="#3c8039"
                    bgColor="#e6f4ea"
                    onClick={this.changewSubTypeData.bind(this, this.props.wid, this.props.otherData.id, 'Connect', 'instagram')}
                  />
                </StyledTreeItem>
                <StyledTreeItem nodeId="4" labelText="GitHub"
                  onClick={this.changewSubTypeData.bind(this, this.props.wid, this.props.otherData.id, 'Connect', 'githubprofile')} labelIcon={GitHubIcon} />
                <StyledTreeItem nodeId="5" labelText="Help"
                  onClick={this.openWindowAlt.bind(this, this.props.wid, 'Terminal', 'Help', "Help")} labelIcon={LiveHelpIcon} />
              </TreeView>
            </div>
            <div className="wdt-right" onContextMenu={this.onrightClick.bind(this, null, null)} style={{ cursor: 'context-menu' }}>
              <br />
              <br />
              {(this.props.otherData.wSubType === 'other') &&
                <div className="subtype-container">
                  <Wdata wsData={this.props.otherData.wsData} />
                </div>
              }

              {(folderitems || fileitems) &&
                <div className={classes.root} key='folderkey'>
                  <div className='fileContainer' ref={this.toggleContainer}>
                    <ul>
                      {
                        folderitems.map(({ _id, folderName }) => (
                          <li key={_id}
                            className={classes.folder}
                            onClick={this.onSelectFolder.bind(this, _id)}
                            onContextMenu={this.onrightClick.bind(this, 'folder', _id)}
                            onDoubleClick={this.openFolder.bind(this, this.props.wid, folderName)}>
                            <div id={_id + "icon"}>
                              <FolderIcon className={classes.foldericon} /></div>
                            <label id={_id + "name"} className={"foldername"}>{folderName}</label></li>
                        ))
                      }

                      {
                        fileitems.map(({ _id, fileName, fileStatus }) => (
                          <li key={_id}
                            className={classes.folder}
                            onClick={this.onSelectFolder.bind(this, _id)}
                            onContextMenu={this.onrightClick.bind(this, 'file', _id)}
                            onDoubleClick={this.openFile.bind(this, 'FileViewer', this.props.wid, fileName, fileStatus)}>
                            <div id={_id + "icon"}>
                              <InsertDriveFileIcon className={classes.foldericon} /></div>
                            <label id={_id + "name"} className={"foldername"}>{fileName.substring(0,fileName.indexOf('.'))}</label></li>
                        ))
                      }
                    </ul>
                  </div>
                </div>
              }

              <Menu
                color="secondary"
                keepMounted
                open={this.state.mouseY !== null}
                onClose={this.handleClose.bind(this)}
                anchorReference="anchorPosition"
                anchorPosition={
                  this.state.mouseY !== null && this.state.mouseX !== null
                    ? { top: this.state.mouseY, left: this.state.mouseX }
                    : undefined

                }
              >
                {(this.state.rightClickedOn === null) &&
                  <MenuItem onClick={() => {
                    alert('This feature is Disable till further Upgrade!')
                  }
                  }>Create folder</MenuItem>
                }
                <MenuItem onClick={() => {
                  alert('This feature is Disable till further Upgrade!')
                }}>Upload file</MenuItem>
                <Modal
                  open={this.state.uploadfileOpen}
                  onClose={() => { this.setState({ uploadfileOpen: false }) }} >
                  <div className={classes.uploadfile}>
                    <form method="POST" onSubmit={this.uploadFile.bind(this, this.props.wid)} encType="multipart/form-data">
                      <label>Upload File</label><br /><br />
                      <input type="file" id="customFile" onChange={this.fileUploadonChange.bind(this)} /><br />
                      <input type="text" id="customFilename" onChange={this.fileNameonChange.bind(this)} /> <br /><br />
                      <button type="submit" value="Upload">Upload</button>
                    </form>
                  </div>
                </Modal>
                <MenuItem onClick={this.openWindowAlt.bind(this, this.props.wid, 'Terminal', 'Help', "Help")} >Terminal (help)</MenuItem>
                <MenuItem onClick={this.openWindowAlt.bind(this, this.props.wid, 'Terminal', 'Aboutme', "AboutMe")}>About Me</MenuItem>
                {(this.state.rightClickedOn != null) &&
                  <MenuItem onClick={() => {
                    alert('This feature is Disable till further Upgrade!')
                  }}>Delete</MenuItem>
                }
              </Menu>
            </div>
          </div>
        </div >
      </Draggable >
    )
  }
}
export default withStyles(styles, { withTheme: true })(Explorer)