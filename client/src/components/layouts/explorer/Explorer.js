import React, { Component } from 'react'
import { v1 as uuidv1} from 'uuid'
// REDux
import compose from 'recompose/compose'
import { connect } from 'react-redux'
import { getFolders, addItem, deleteItem, uploadItem } from '../../../actions/itemActions'
import PropTypes from 'prop-types'

import '../terminal/terminal.css'
import './explorer.css'
import Draggable from 'react-draggable'
import $ from 'jquery'
import '../../windows/academics/academics.css'

import FolderIcon from '@material-ui/icons/Folder';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import TreeView from '@material-ui/lab/TreeView';
import TreeItem from '@material-ui/lab/TreeItem';
import Typography from '@material-ui/core/Typography';
import MailIcon from '@material-ui/icons/Mail';
import DeleteIcon from '@material-ui/icons/Delete';
import Label from '@material-ui/icons/Label';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import InfoIcon from '@material-ui/icons/Info';
import ForumIcon from '@material-ui/icons/Forum';
import LocalOfferIcon from '@material-ui/icons/LocalOffer';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import InsertDriveFileIcon from '@material-ui/icons/InsertDriveFile';
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
  fileContainer: {
    position: 'absolute'
  },
  newFolderName: '',
  folder: {
    width: '170px',
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


class Explorer extends Component{ 
  constructor(props) {
    super(props)
    /////////////////////////////////////////////  STATE
    this.state = {
      // cursor position on right click
      mouseX: null,
      mouseY: null,
      rightClickedOn: null, // id of folder or File on Right Click
      isFolderSelected: false,
      currentPath: null,
      previousPath: null,
      uploadfileOpen: false,
      filesOrFolders: true,  // if FolderisOpen -> true else false
      
    }
    this.toggleContainer = React.createRef();
    this.uploadedfile = React.createRef();
    this.onClickOutsideHandler = this.onClickOutsideHandler.bind(this);
  }

componentDidMount() {    
  window.addEventListener('click', this.onClickOutsideHandler);
  this.props.getFolders({ wdata: this.props.windItem });
  this.setState({ 
    rightClickedOn: null, 
    currentPath: this.props.windItem
  });
}
componentWillUnmount() {
  window.removeEventListener('click', this.onClickOutsideHandler);
}

onClickOutsideHandler(event) {    
  if (this.state.isFolderSelected && !this.toggleContainer.current.contains(event.target)) {
    $('#'+this.state.selectfolderName+'icon').toggleClass('foldericonselect')
    $('#'+this.state.selectfolderName+'name').toggleClass('foldernameselect')
    this.setState({ 
      isFolderSelected: false,
      selectfolderName: 'none',
      rightClickedOn: null,
      currentPath: null
    })
  }
}

onSelectFolder(id) {
  $('#'+id+'icon').toggleClass('foldericonselect')
  $('#'+id+'name').toggleClass('foldernameselect')
  
  if(this.state.selectfolderName === id){
    this.setState({ 
      isFolderSelected: false,
      selectfolderName: 'none' })
  }
  else{
    $('#'+this.state.selectfolderName+'icon').toggleClass('foldericonselect')
    $('#'+this.state.selectfolderName+'name').toggleClass('foldernameselect')
    this.setState({ 
      isFolderSelected: true,
      selectfolderName: id,
      onrightClick: id
    })
  }
}
// onDoubleClick on folder or file
openFolder(folderName) {
  this.setState({
    previousPath: this.state.currentPath,
    currentPath: this.state.currentPath+'/'+folderName,
    filesOrFolders: false // show fileitems
  })
  this.props.getFolders({ 
    wdata: this.props.windItem,
    wfolder: folderName
  });
}
// Data send back to MacOS (parent)
closeW(props, clsid){ 
  props.dataExchange(clsid)
}

openWindowAlt(props, wtype, wdata){
  const winData = {
    wid: uuidv1(),
    wtype: wtype,
    wdata: wdata
  }
  props.dataExchange(winData)
  this.activeWindow(winData.wid)
}
activeWindow(wid){
  this.setState({
    rightClickedOn: null
  })
  $('.wind-con').css({
      zIndex: "100"
  })
  $("#wc"+wid).css({
      zIndex: "1000"
  })
}
resizeWindow(wid){
  var temp = "#wc"+wid
  var widthOfBody = parseInt($('#root').css("width"))
  var widthOfWindow = parseInt($(temp).css("width")) / widthOfBody * 100
  if(widthOfWindow <= 99){
      $(temp).css({
          "width": "100%",
          "height": "100%",
          "top": "48px",
          "left": "0",
          "transform": "translate(0%, 0%)"
      })
      $('.wdt-right').css({
          width: widthOfBody-235+"px"
      })
  }else{
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


  onrightClick(RightClickedOn, event){
    event.preventDefault();
    this.setState({
      mouseX: event.clientX - 2,
      mouseY: event.clientY - 4
    });
    if(RightClickedOn != null){
      this.setState({
        rightClickedOn: RightClickedOn //set to id of the folder
      });
    }
  };
  handleClose() {
    this.setState({
      mouseX: null,
      mouseY: null,
    });
  };
  windowBack() {
    this.props.getFolders({ 
      wdata: this.props.windItem
    });
    this.setState({
      previousPath: null,
      currentPath: this.props.windItem,
      filesOrFolders: true // show fileitems
    })
  }
  onDeleteFolder = (id) => {
    this.props.deleteItem(id)
    this.setState({
      mouseX: null,
      mouseY: null,
      rightClickedOn: null
    });
  }
  uploadFile(event) {
    event.preventDefault();
    this.props.uploadItem({
      filename: this.uploadedfile.current.files[0].name, // file name
      filetype: this.uploadedfile.current.files[0].type,
      filesize: this.uploadedfile.current.files[0].size,
      filepath: this.state.currentPath
    })
    this.setState({ uploadfileOpen: false, rightClickedOn: null })
  }

  render () {
  const {classes} = this.props  //passing data back to MacOS
  const { folderitems, fileitems } = this.props.item
  var windConId = "wc"+this.props.wid;

  return (
    <Draggable>
        <div className="wind-con" id={windConId} onClick={this.activeWindow.bind(this, this.props.wid)}>
            <div id="wind-up-tab">
                <ul>
                    <li id="closetab" className="wintab" onClick={this.closeW.bind(this, this.props, this.props.wid)}>
                    </li>
                    <li id="minimztab" className="wintab" onClick={this.closeW.bind(this, this.props, this.props.wid)}></li>
                    <li id="tabsize" className="wintab" onClick={this.resizeWindow.bind(this, this.props.wid)}></li>
                    <li id="opnd-wind-icon-thumbnail" className="opndwintab"><img src={require('../../../assets/icons/help.png')} alt="Window" /></li>
                    <li className="opndwintab">{this.props.windItem}</li>
                </ul>
            </div>
            
            <div id="wind-ter-conn">
            
            <div className="wind-up-low">
                <div id="wul-conn" className="wul-conn">
                  <ul>
                    <li className="wbackleft" onClick={this.windowBack.bind(this)} ><img src={require('../../../assets/graphics/wb-left.png')} alt="" /></li>
                    <li className="wbackmid"  ><img src={require('../../../assets/graphics/wb-mid.png')} alt="" /></li>
                    <li className="wbackright"><img src={require('../../../assets/graphics/wb-right.png')} alt="" /></li>
                  </ul>
                </div>
            </div>
            <br/>
            <div className="wdt-left">
              <TreeView
                className={classes.root}
                defaultExpanded={['3']}
                defaultCollapseIcon={<ArrowDropDownIcon />}
                defaultExpandIcon={<ArrowRightIcon />}
                defaultEndIcon={<div style={{ width: 24 }} />}
              >
                      
                <StyledTreeItem nodeId="1" labelText="About Me" 
                onClick={this.openWindowAlt.bind(this, this.props, 'Terminal', 'Aboutme')} labelIcon={MailIcon} />
                <StyledTreeItem nodeId="2" labelText="Resume" 
                onClick={this.openWindowAlt.bind(this, this.props, 'Terminal', 'Resume')} labelIcon={DeleteIcon} />
                <StyledTreeItem nodeId="3" labelText="Categories"
                 onClick={this.openWindowAlt.bind(this, this.props, 'FileViewer', 'file')} labelIcon={Label}>
                  <StyledTreeItem
                    nodeId="5"
                    labelText="Social"
                    labelIcon={SupervisorAccountIcon}
                    labelInfo="90"
                    color="#1a73e8"
                    bgColor="#e8f0fe"
                  />
                  <StyledTreeItem
                    nodeId="6"
                    labelText="Updates"
                    labelIcon={InfoIcon}
                    labelInfo="2,294"
                    color="#e3742f"
                    bgColor="#fcefe3"
                  />
                  <StyledTreeItem
                    nodeId="7"
                    labelText="Forums"
                    labelIcon={ForumIcon}
                    labelInfo="3,566"
                    color="#a250f5"
                    bgColor="#f3e8fd"
                  />
                  <StyledTreeItem
                    nodeId="8"
                    labelText="Promotions"
                    labelIcon={LocalOfferIcon}
                    labelInfo="733"
                    color="#3c8039"
                    bgColor="#e6f4ea"
                  />
                </StyledTreeItem>
                <StyledTreeItem nodeId="4" labelText="Help"
                 onClick={this.openWindowAlt.bind(this, this.props, 'Terminal', 'Help')} labelIcon={Label} />
              </TreeView>
          </div>
          <div className="wdt-right" onContextMenu={this.onrightClick.bind(this, null)}  style={{ cursor: 'context-menu' }}>
            <br/>
            <br/>


            <div className={classes.root} key='folderkey'>
              <div className={classes.fileContainer} ref={this.toggleContainer}>
                <ul>
                  {(this.state.filesOrFolders === true) &&
                    folderitems.map(({_id, folderName}) => (
                      <li key={_id} 
                        className={classes.folder} 
                        onClick={this.onSelectFolder.bind(this, _id)} 
                        onContextMenu={this.onrightClick.bind(this, _id)} 
                        onDoubleClick={this.openFolder.bind(this, folderName)}>
                      <div id={_id+"icon"}>
                      <FolderIcon className={classes.foldericon} /></div>
                    <label id={_id+"name"} className={ "foldername"}>{folderName}</label></li>
                    ))
                  }

                  { (this.state.filesOrFolders === false) && //to open file
                   fileitems.map(({_id, fileName}) => (
                    <li key={_id} 
                      className={classes.folder} 
                      onClick={this.onSelectFolder.bind(this, _id)} 
                      onContextMenu={this.onrightClick.bind(this, _id)} 
                      onDoubleClick={this.openWindowAlt.bind(this, this.props, 'FileViewer', fileName)}>
                    <div id={_id+"icon"}>
                    <InsertDriveFileIcon className={classes.foldericon} /></div>
                  <label id={_id+"name"} className={ "foldername"}>{fileName}</label></li>
                  ))}
                </ul>
              </div>
            </div>


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
              {( this.state.rightClickedOn === null ) && 
                <MenuItem onClick={ ()=>{
                  const newfoldername = prompt('Enter Folder Name')
                  if(newfoldername){
                    this.setState(state=>({
                      mouseX: null,
                      mouseY: null,
                    }))
                    this.props.addItem({
                        fname: newfoldername, // add new folder
                        fsize: 0,
                        fpath: this.state.currentPath
                    })
                  }
                }
              }>Create folder</MenuItem>
              }
              <MenuItem onClick={ () => { this.setState({ uploadfileOpen: true}) }}>Upload file</MenuItem>
                <Modal
                open={this.state.uploadfileOpen}
                onClose={ () => { this.setState({ uploadfileOpen: false}) }} >
                <div className={classes.uploadfile}>
                  <form onSubmit={this.uploadFile.bind(this)}>
                    <label>Upload File</label><br/><br/>
                    <input type="file" ref={this.uploadedfile} /> <br/><br/>
                    <button type="submit">Upload</button>
                  </form>
                </div>
              </Modal>
              <MenuItem onClick={ this.openWindowAlt.bind(this, this.props, 'Terminal', 'Help') } >Terminal (help)</MenuItem>
              <MenuItem onClick={this.openWindowAlt.bind(this, this.props, 'Terminal', 'Aboutme')}>About Me</MenuItem>
              {(this.state.rightClickedOn != null) &&
                <MenuItem onClick={this.onDeleteFolder.bind(this, this.state.rightClickedOn)}>Delete</MenuItem>
              }
            </Menu>
        </div>
      </div>
    </div>
    
    </Draggable>
  )}
}

Explorer.propTypes = {
  getFolders: PropTypes.func.isRequired,
  item: PropTypes.object.isRequired
}
const mapStateToProps = (state) => ({
  item: state.item
})
export default compose(
  connect(mapStateToProps, {getFolders, addItem, deleteItem, uploadItem}),
  withStyles(styles, {withTheme: true})
)(Explorer)
