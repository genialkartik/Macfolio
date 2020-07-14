import React from 'react'
import '../terminal/terminal.css'
import './explorer.css'
import * as windData from '../../windows/index'
import Draggable from 'react-draggable'
import $ from 'jquery'

import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
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
// onrightClick 
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';


const initialState = {
  mouseX: null,
  mouseY: null,
};

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

const useStyles = makeStyles({
  root: {
    height: 264,
    flexGrow: 1,
    maxWidth: 400,
  }
});


const closeW = (props, clsid) => () => { 
  props.closeWindow(clsid)
}
const resizeWindow = wid => () => {
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
const activeWindow = wid => () => {
  $('.wind-con').css({
      zIndex: "100"
  })
  $("#wc"+wid).css({
      zIndex: "1000"
  })
}




function Explorer(props){ 
  const classes = useStyles()
  const Wdata = windData[props.windItem]  //passing data back to MacOS  
  var windConId = "wc"+props.wid

  // on right click
  const [state, setState] = React.useState(initialState);

  const onrightClick = (event) => {
    event.preventDefault();
    setState({
      mouseX: event.clientX - 2,
      mouseY: event.clientY - 4,
    });
  };
  const handleClose = () => {
    setState(initialState);
  };

  return (
    <Draggable>
        <div className="wind-con" id={windConId} onClick={activeWindow(props.wid)}>
            <div id="wind-up-tab">
                <ul>
                    <li id="closetab" className="wintab" onClick={closeW(props, props.wid)}>
                    </li>
                    <li id="minimztab" className="wintab" onClick={closeW(props.wid)}></li>
                    <li id="tabsize" className="wintab" onClick={resizeWindow(props.wid)}></li>
                    <li id="opnd-wind-icon-thumbnail" className="opndwintab"><img src={require('../../../assets/icons/help.png')} alt="Window" /></li>
                    <li className="opndwintab">{props.windItem}</li>
                </ul>
            </div>
            
            <div id="wind-ter-conn">
            <div className="wind-up-low">
                <div id="wul-conn">
                    <img src={require('../../../assets/graphics/explorer-wulc.png')} alt=""/>
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
                <StyledTreeItem nodeId="1" labelText="About Me" labelIcon={MailIcon} />
                <StyledTreeItem nodeId="2" labelText="Academics" labelInfo="898" labelIcon={DeleteIcon} />
                <StyledTreeItem nodeId="3" labelText="Categories" labelIcon={Label}>
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
                <StyledTreeItem nodeId="4" labelText="History" labelIcon={Label} />
              </TreeView>
          </div>
          <div className="wdt-right" onContextMenu={onrightClick}  style={{ cursor: 'context-menu' }}>
            <br/>
            <br/>
            <Wdata />
            <Menu
              color="secondary"
              keepMounted
              open={state.mouseY !== null}
              onClose={handleClose}
              anchorReference="anchorPosition"
              anchorPosition={
                state.mouseY !== null && state.mouseX !== null
                  ? { top: state.mouseY, left: state.mouseX }
                  : undefined
              }
            >
              <MenuItem onClick={handleClose}>Create folder</MenuItem>
              <MenuItem onClick={handleClose}>Upload file</MenuItem>
              <MenuItem onClick={handleClose}>Terminal (help)</MenuItem>
              <MenuItem onClick={handleClose}>About Me</MenuItem>
            </Menu>
        </div>
      </div>
    </div>
    </Draggable>
  );
}


export default Explorer;