webpackHotUpdate("main",{

/***/ "./src/components/layouts/explorer/Explorer.js":
/*!*****************************************************!*\
  !*** ./src/components/layouts/explorer/Explorer.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../index */ "./src/components/index.js");
/* harmony import */ var _terminal_terminal_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../terminal/terminal.css */ "./src/components/layouts/terminal/terminal.css");
/* harmony import */ var _terminal_terminal_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_terminal_terminal_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _explorer_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./explorer.css */ "./src/components/layouts/explorer/explorer.css");
/* harmony import */ var _explorer_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_explorer_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_draggable__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-draggable */ "./node_modules/react-draggable/build/cjs/cjs.js");
/* harmony import */ var react_draggable__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_draggable__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var recompose_compose__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! recompose/compose */ "../node_modules/recompose/compose.js");
/* harmony import */ var recompose_compose__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(recompose_compose__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _material_ui_icons_Folder__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/icons/Folder */ "./node_modules/@material-ui/icons/Folder.js");
/* harmony import */ var _material_ui_icons_Folder__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Folder__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_lab_TreeView__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/lab/TreeView */ "./node_modules/@material-ui/lab/esm/TreeView/index.js");
/* harmony import */ var _material_ui_lab_TreeItem__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/lab/TreeItem */ "./node_modules/@material-ui/lab/esm/TreeItem/index.js");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/esm/Typography/index.js");
/* harmony import */ var _material_ui_icons_SupervisorAccount__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @material-ui/icons/SupervisorAccount */ "./node_modules/@material-ui/icons/SupervisorAccount.js");
/* harmony import */ var _material_ui_icons_SupervisorAccount__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_SupervisorAccount__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _material_ui_icons_ArrowDropDown__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @material-ui/icons/ArrowDropDown */ "./node_modules/@material-ui/icons/ArrowDropDown.js");
/* harmony import */ var _material_ui_icons_ArrowDropDown__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_ArrowDropDown__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _material_ui_icons_ArrowRight__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @material-ui/icons/ArrowRight */ "./node_modules/@material-ui/icons/ArrowRight.js");
/* harmony import */ var _material_ui_icons_ArrowRight__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_ArrowRight__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _material_ui_icons_PersonPin__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @material-ui/icons/PersonPin */ "./node_modules/@material-ui/icons/PersonPin.js");
/* harmony import */ var _material_ui_icons_PersonPin__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_PersonPin__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _material_ui_icons_InsertDriveFile__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @material-ui/icons/InsertDriveFile */ "./node_modules/@material-ui/icons/InsertDriveFile.js");
/* harmony import */ var _material_ui_icons_InsertDriveFile__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_InsertDriveFile__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var _material_ui_icons_Twitter__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @material-ui/icons/Twitter */ "./node_modules/@material-ui/icons/Twitter.js");
/* harmony import */ var _material_ui_icons_Twitter__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Twitter__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var _material_ui_icons_Instagram__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @material-ui/icons/Instagram */ "./node_modules/@material-ui/icons/Instagram.js");
/* harmony import */ var _material_ui_icons_Instagram__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Instagram__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var _material_ui_icons_GitHub__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @material-ui/icons/GitHub */ "./node_modules/@material-ui/icons/GitHub.js");
/* harmony import */ var _material_ui_icons_GitHub__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_GitHub__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var _material_ui_icons_HorizontalSplit__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @material-ui/icons/HorizontalSplit */ "./node_modules/@material-ui/icons/HorizontalSplit.js");
/* harmony import */ var _material_ui_icons_HorizontalSplit__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_HorizontalSplit__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var _material_ui_icons_LiveHelp__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @material-ui/icons/LiveHelp */ "./node_modules/@material-ui/icons/LiveHelp.js");
/* harmony import */ var _material_ui_icons_LiveHelp__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_LiveHelp__WEBPACK_IMPORTED_MODULE_23__);
/* harmony import */ var _material_ui_icons_Create__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @material-ui/icons/Create */ "./node_modules/@material-ui/icons/Create.js");
/* harmony import */ var _material_ui_icons_Create__WEBPACK_IMPORTED_MODULE_24___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Create__WEBPACK_IMPORTED_MODULE_24__);
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/esm/Button/index.js");
/* harmony import */ var _material_ui_core_Menu__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @material-ui/core/Menu */ "./node_modules/@material-ui/core/esm/Menu/index.js");
/* harmony import */ var _material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @material-ui/core/MenuItem */ "./node_modules/@material-ui/core/esm/MenuItem/index.js");
/* harmony import */ var _material_ui_core_Modal__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @material-ui/core/Modal */ "./node_modules/@material-ui/core/esm/Modal/index.js");
/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @material-ui/core/TextField */ "./node_modules/@material-ui/core/esm/TextField/index.js");
var _jsxFileName = "/media/tyagi/Imp/Dev/Macfolio/Macfolio3.0/client/src/components/layouts/explorer/Explorer.js";

























 // onrightClick 



 // feedback form


const useTreeItemStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_10__["makeStyles"])(theme => ({
  root: {
    color: theme.palette.text.secondary,
    '&:hover > $content': {
      backgroundColor: theme.palette.action.hover
    },
    '&:focus > $content, &$selected > $content': {
      backgroundColor: 'rgba(39, 39, 39)',
      color: 'var(--tree-view-color)'
    }
  },
  content: {
    color: theme.palette.text.secondary,
    borderTopRightRadius: theme.spacing(2),
    borderBottomRightRadius: theme.spacing(2),
    paddingRight: theme.spacing(1),
    fontWeight: theme.typography.fontWeightMedium,
    '$expanded > &': {
      fontWeight: theme.typography.fontWeightRegular
    }
  },
  group: {
    marginLeft: 0,
    '& $content': {
      paddingLeft: theme.spacing(2)
    }
  },
  expanded: {},
  selected: {},
  label: {
    fontWeight: 'inherit',
    color: '#ffffff'
  },
  labelRoot: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0.5, 0)
  },
  labelIcon: {
    marginRight: theme.spacing(1)
  },
  labelText: {
    fontWeight: 'inherit',
    flexGrow: 1
  }
}));

function StyledTreeItem(props) {
  const classes = useTreeItemStyles();
  const {
    labelText,
    labelIcon: LabelIcon,
    labelInfo,
    color,
    bgColor,
    ...other
  } = props;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_lab_TreeItem__WEBPACK_IMPORTED_MODULE_12__["default"], Object.assign({
    label: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: classes.labelRoot,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 91,
        columnNumber: 9
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(LabelIcon, {
      color: "inherit",
      className: classes.labelIcon,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 92,
        columnNumber: 11
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_13__["default"], {
      variant: "body2",
      className: classes.labelText,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 93,
        columnNumber: 11
      }
    }, labelText), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_13__["default"], {
      variant: "caption",
      color: "inherit",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 96,
        columnNumber: 11
      }
    }, labelInfo)),
    style: {
      '--tree-view-color': color,
      '--tree-view-bg-color': bgColor
    },
    classes: {
      root: classes.root,
      content: classes.content,
      expanded: classes.expanded,
      selected: classes.selected,
      group: classes.group,
      label: classes.label
    }
  }, other, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 5
    }
  }));
}

StyledTreeItem.propTypes = {
  bgColor: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.string,
  color: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.string,
  labelIcon: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.elementType.isRequired,
  labelInfo: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.string,
  labelText: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.string.isRequired
};

const styles = theme => ({
  root: {
    height: 264,
    flexGrow: 1,
    maxWidth: 400
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

class Explorer extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(props) {
    super(props); /////////////////////////////////////////////  STATE

    this.fileUploadonChange = e => {
      this.setState({
        file: e.target.files[0]
      });
    };

    this.fileNameonChange = e => {
      this.setState({
        filenametoUpload: e.target.value
      });
    };

    this.uploadFile = (wid, e) => {
      e.preventDefault();
      let formData = new FormData();
      formData.append('filetoupload', this.state.file);
      formData.append('filenametoupload', this.state.filenametoUpload);
      formData.append('itempath', this.props.currPath.currentPath.toString().replace(/,/g, '/'));
      this.props.dataExchange({
        //sent to itemAction
        wid: wid,
        waction: 'uploadItem',
        formdata: formData //sendt to itemAction and then explorer.js in

      });
      this.setState({
        uploadfileOpen: false,
        rightClickedOn: null
      });
    };

    this.state = {
      // cursor position on right click
      mouseX: null,
      mouseY: null,
      rightClickedOn: null,
      // id of folder or File on Right Click
      selectType: null,
      // file or folder
      file: null,
      filenametoUpload: null,
      isFolderSelected: false,
      uploadfileOpen: false,
      activeWindowId: null,
      // feedback form
      openFeedbackForm: false,
      feederName: null,
      feederImage: null,
      feederMessage: null,
      feederStar: null
    };
    this.toggleContainer = react__WEBPACK_IMPORTED_MODULE_0___default.a.createRef();
    this.uploadedfile = react__WEBPACK_IMPORTED_MODULE_0___default.a.createRef();
    this.onClickOutsideHandler = this.onClickOutsideHandler.bind(this);
  }

  componentDidMount() {
    window.addEventListener('click', this.onClickOutsideHandler);
    this.setState({
      rightClickedOn: null,
      activeWindowId: this.props.wid
    });
  }

  componentWillUnmount() {
    window.removeEventListener('click', this.onClickOutsideHandler);
  }

  onClickOutsideHandler(event) {
    if (this.state.isFolderSelected && !this.toggleContainer.current.contains(event.target)) {
      jquery__WEBPACK_IMPORTED_MODULE_6___default()('#' + this.state.selectfolderName + 'icon').toggleClass('foldericonselect');
      jquery__WEBPACK_IMPORTED_MODULE_6___default()('#' + this.state.selectfolderName + 'name').toggleClass('foldernameselect');
      this.setState({
        isFolderSelected: false,
        selectfolderName: 'none',
        rightClickedOn: null
      });
    }
  }

  onSelectFolder(id) {
    jquery__WEBPACK_IMPORTED_MODULE_6___default()('#' + id + 'icon').toggleClass('foldericonselect');
    jquery__WEBPACK_IMPORTED_MODULE_6___default()('#' + id + 'name').toggleClass('foldernameselect');

    if (this.state.selectfolderName === id) {
      this.setState({
        isFolderSelected: false,
        selectfolderName: 'none'
      });
    } else {
      jquery__WEBPACK_IMPORTED_MODULE_6___default()('#' + this.state.selectfolderName + 'icon').toggleClass('foldericonselect');
      jquery__WEBPACK_IMPORTED_MODULE_6___default()('#' + this.state.selectfolderName + 'name').toggleClass('foldernameselect');
      this.setState({
        isFolderSelected: true,
        selectfolderName: id,
        onrightClick: id
      });
    }
  } // onDoubleClick on folder or file


  openFolder(wid, folderName, e) {
    var x = jquery__WEBPACK_IMPORTED_MODULE_6___default()("#wc" + wid).position();
    var tempCurrentPath = this.props.currPath.currentPath;
    tempCurrentPath.push(folderName);
    var currPath = this.props.currPath.currentPath.toString().replace(/,/g, '/');
    this.props.dataExchange({
      waction: 'openFolder',
      wid: wid,
      currPath: currPath,
      currentPath: tempCurrentPath,
      diffX: x.left,
      diffY: x.top
    });
  } // Data send back to MacOS (parent)


  closeW(clsid) {
    this.props.dataExchange({
      waction: 'closeWindow',
      wid: clsid
    });
  }

  openWindowAlt(wid, wtype, wdata, wname) {
    var x = jquery__WEBPACK_IMPORTED_MODULE_6___default()("#wc" + wid).position();
    this.props.dataExchange({
      waction: wtype,
      wid: wid,
      wdata: wdata,
      wname: wname,
      diffX: x.left,
      diffY: x.top
    });
  }

  openFile(wtype, id, wdata, fileStatus) {
    var x = jquery__WEBPACK_IMPORTED_MODULE_6___default()("#wc" + id).position();
    this.props.dataExchange({
      waction: wtype,
      wid: id,
      wdata: wdata,
      fileStatus: fileStatus,
      diffX: x.left,
      diffY: x.top
    });
  }

  changewSubTypeData(wid, oDataId, wdata, wsdata) {
    var x = jquery__WEBPACK_IMPORTED_MODULE_6___default()("#wc" + wid).position();
    this.props.dataExchange({
      waction: 'changewsData',
      wid: wid,
      id: oDataId,
      wdata: wdata,
      wsubtype: 'other',
      wsdata: wsdata,
      diffX: x.left,
      diffY: x.top
    });
  }

  activeWindow(wid) {
    this.setState({
      rightClickedOn: null,
      activeWindowId: wid
    });
    jquery__WEBPACK_IMPORTED_MODULE_6___default()('.wind-con').css({
      zIndex: "100"
    });
    jquery__WEBPACK_IMPORTED_MODULE_6___default()("#wc" + wid).css({
      zIndex: "1000"
    });
  }

  resizeWindow(wid) {
    var temp = "#wc" + wid;
    var widthOfBody = parseInt(jquery__WEBPACK_IMPORTED_MODULE_6___default()('#root').css("width"));
    var widthOfWindow = parseInt(jquery__WEBPACK_IMPORTED_MODULE_6___default()(temp).css("width")) / widthOfBody * 100;

    if (widthOfWindow <= 99) {
      jquery__WEBPACK_IMPORTED_MODULE_6___default()(temp).css({
        "width": "100%",
        "height": "100%",
        "top": "48px",
        "left": "0",
        "transform": "translate(0%, 0%)"
      });
      jquery__WEBPACK_IMPORTED_MODULE_6___default()('.wdt-right').css({
        width: widthOfBody - 235 + "px"
      });
    } else {
      jquery__WEBPACK_IMPORTED_MODULE_6___default()(temp).css({
        "width": "60%",
        "height": "70%",
        "top": "10%",
        "left": "20%",
        "transform": "translate(0%, 0%)"
      });
      jquery__WEBPACK_IMPORTED_MODULE_6___default()('.wdt-right').css({
        width: "calc(100% - 235px)"
      });
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

      });
    }
  }

  handleClose() {
    this.setState({
      mouseX: null,
      mouseY: null
    });
  }

  windowBack(wid) {
    var x = jquery__WEBPACK_IMPORTED_MODULE_6___default()("#wc" + wid).position();

    if (this.props.currPath.currentPath.length === 1) {
      return 1;
    } else {
      let tempPathAr = this.props.currPath.currentPath;
      let newCurentPath = tempPathAr.slice(0, -1);
      var currPath = newCurentPath.toString().replace(/,/g, '/');
      this.props.dataExchange({
        waction: 'openFolder',
        wid: wid,
        currPath: currPath,
        currentPath: newCurentPath,
        diffX: x.left,
        diffY: x.top
      });
    }
  }

  render() {
    const {
      classes
    } = this.props;
    var windConId = "wc" + this.props.wid;
    const folderitems = this.props.windowFolders;
    const fileitems = this.props.windowFiles;
    let Wdata;

    if (this.props.windItem === 'Connect' || this.props.windItem === 'Feedback' || this.props.windItem === 'Miscellaneous') {
      Wdata = _index__WEBPACK_IMPORTED_MODULE_2__[this.props.windItem];
    }

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_draggable__WEBPACK_IMPORTED_MODULE_5___default.a, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 405,
        columnNumber: 7
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "wind-con",
      id: windConId,
      style: this.props.winPos ? this.state.activeWindowId === this.props.winPos.id ? {
        left: this.props.winPos.left,
        top: this.props.winPos.top
      } : {} : {},
      onClick: this.activeWindow.bind(this, this.props.wid),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 406,
        columnNumber: 9
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      id: "wind-up-tab",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 414,
        columnNumber: 11
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 415,
        columnNumber: 13
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
      id: "closetab",
      className: "wintab",
      onClick: this.closeW.bind(this, this.props.wid),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 416,
        columnNumber: 15
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
      id: "minimztab",
      className: "wintab",
      onClick: this.closeW.bind(this, this.props.wid),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 418,
        columnNumber: 15
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
      id: "tabsize",
      className: "wintab",
      onClick: this.resizeWindow.bind(this, this.props.wid),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 419,
        columnNumber: 15
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
      id: "opnd-wind-icon-thumbnail",
      className: "opndwintab",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 420,
        columnNumber: 15
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      src: __webpack_require__(/*! ../../../assets/icons/help.png */ "./src/assets/icons/help.png"),
      alt: "Window",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 420,
        columnNumber: 72
      }
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
      className: "opndwintab",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 421,
        columnNumber: 15
      }
    }, this.props.windName))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      id: "wind-ter-conn",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 425,
        columnNumber: 11
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "wind-up-low",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 427,
        columnNumber: 13
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      id: "wul-conn",
      className: "wul-conn",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 428,
        columnNumber: 15
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 429,
        columnNumber: 17
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
      className: "wbackleft",
      onClick: this.windowBack.bind(this, this.props.wid),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 430,
        columnNumber: 19
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      src: __webpack_require__(/*! ../../../assets/graphics/wb-left.png */ "./src/assets/graphics/wb-left.png"),
      alt: "",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 430,
        columnNumber: 99
      }
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
      className: "wbackmid",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 431,
        columnNumber: 19
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      src: __webpack_require__(/*! ../../../assets/graphics/wb-mid.png */ "./src/assets/graphics/wb-mid.png"),
      alt: "",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 431,
        columnNumber: 46
      }
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
      className: "wbackright",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 432,
        columnNumber: 19
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      src: __webpack_require__(/*! ../../../assets/graphics/wb-right.png */ "./src/assets/graphics/wb-right.png"),
      alt: "",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 432,
        columnNumber: 46
      }
    }))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 436,
        columnNumber: 13
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "wdt-left",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 437,
        columnNumber: 13
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_lab_TreeView__WEBPACK_IMPORTED_MODULE_11__["default"], {
      className: classes.root,
      defaultExpanded: ['3'],
      defaultCollapseIcon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_ArrowDropDown__WEBPACK_IMPORTED_MODULE_15___default.a, {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 441,
          columnNumber: 38
        }
      }),
      defaultExpandIcon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_ArrowRight__WEBPACK_IMPORTED_MODULE_16___default.a, {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 442,
          columnNumber: 36
        }
      }),
      defaultEndIcon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        style: {
          width: 24
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 443,
          columnNumber: 33
        }
      }),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 438,
        columnNumber: 15
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledTreeItem, {
      nodeId: "1",
      labelText: "About Me",
      onClick: this.openWindowAlt.bind(this, this.props.wid, 'Terminal', 'Aboutme', "AboutMe"),
      labelIcon: _material_ui_icons_PersonPin__WEBPACK_IMPORTED_MODULE_17___default.a,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 446,
        columnNumber: 17
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledTreeItem, {
      nodeId: "2",
      labelText: "Resume",
      onClick: this.openWindowAlt.bind(this, this.props.wid, 'Terminal', 'Resume', "Resume"),
      labelIcon: _material_ui_icons_InsertDriveFile__WEBPACK_IMPORTED_MODULE_18___default.a,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 448,
        columnNumber: 17
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledTreeItem, {
      nodeId: "3",
      labelText: "Social",
      onClick: this.changewSubTypeData.bind(this, this.props.wid, this.props.otherData.id, 'Connect', 'connect'),
      labelIcon: _material_ui_icons_SupervisorAccount__WEBPACK_IMPORTED_MODULE_14___default.a,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 450,
        columnNumber: 17
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledTreeItem, {
      nodeId: "6",
      labelText: "Twitter",
      labelIcon: _material_ui_icons_Twitter__WEBPACK_IMPORTED_MODULE_19___default.a,
      labelInfo: "90",
      color: "#1a73e8",
      bgColor: "#e8f0fe",
      onClick: this.changewSubTypeData.bind(this, this.props.wid, this.props.otherData.id, 'Connect', 'twitter'),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 453,
        columnNumber: 19
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledTreeItem, {
      nodeId: "7",
      labelText: "Dev.to",
      labelIcon: _material_ui_icons_Create__WEBPACK_IMPORTED_MODULE_24___default.a,
      labelInfo: "2,294",
      color: "#e3742f",
      bgColor: "#fcefe3",
      onClick: this.changewSubTypeData.bind(this, this.props.wid, this.props.otherData.id, 'Connect', 'devtoblogs'),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 462,
        columnNumber: 19
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledTreeItem, {
      nodeId: "8",
      labelText: "Stack Overflow",
      labelIcon: _material_ui_icons_HorizontalSplit__WEBPACK_IMPORTED_MODULE_22___default.a,
      labelInfo: "3,566",
      color: "#a250f5",
      bgColor: "#f3e8fd",
      onClick: this.changewSubTypeData.bind(this, this.props.wid, this.props.otherData.id, 'Connect', 'stackoverflow'),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 471,
        columnNumber: 19
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledTreeItem, {
      nodeId: "9",
      labelText: "Instagram",
      labelIcon: _material_ui_icons_Instagram__WEBPACK_IMPORTED_MODULE_20___default.a,
      labelInfo: "733",
      color: "#3c8039",
      bgColor: "#e6f4ea",
      onClick: this.changewSubTypeData.bind(this, this.props.wid, this.props.otherData.id, 'Connect', 'instagram'),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 480,
        columnNumber: 19
      }
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledTreeItem, {
      nodeId: "4",
      labelText: "GitHub",
      onClick: this.changewSubTypeData.bind(this, this.props.wid, this.props.otherData.id, 'Connect', 'githubprofile'),
      labelIcon: _material_ui_icons_GitHub__WEBPACK_IMPORTED_MODULE_21___default.a,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 490,
        columnNumber: 17
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledTreeItem, {
      nodeId: "5",
      labelText: "Help",
      onClick: this.openWindowAlt.bind(this, this.props.wid, 'Terminal', 'Help', "Help"),
      labelIcon: _material_ui_icons_LiveHelp__WEBPACK_IMPORTED_MODULE_23___default.a,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 492,
        columnNumber: 17
      }
    })), Wdata ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "task1",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 496,
        columnNumber: 17
      }
    }, Wdata.displayName === 'WithStyles(Feedback)' && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_25__["default"], {
      variant: "contained",
      onClick: () => {
        this.setState({
          openFeedbackForm: !this.state.openFeedbackForm
        });
      },
      style: {
        background: 'rgba(29, 29, 29)'
      },
      size: "large",
      color: "primary",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 498,
        columnNumber: 21
      }
    }, "Give Feedback"), this.state.openFeedbackForm === true && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "feedback-form",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 508,
        columnNumber: 21
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
      className: "form-detail",
      noValidate: true,
      autoComplete: "off",
      id: "myform",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 509,
        columnNumber: 23
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 510,
        columnNumber: 25
      }
    }, "Thanks for enlightening me with your valuable feedback!"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "form-group",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 511,
        columnNumber: 25
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "form-row form-row-1",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 512,
        columnNumber: 27
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 513,
        columnNumber: 29
      }
    }, "Your Name"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
      type: "text",
      name: "cname",
      id: "first_name",
      className: "input-text",
      required: true,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 514,
        columnNumber: 29
      }
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_29__["default"], {
      id: "outlined-basic",
      label: "Outlined",
      variant: "outlined",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 517,
        columnNumber: 25
      }
    })))) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 522,
        columnNumber: 17
      }
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "wdt-right",
      onContextMenu: this.onrightClick.bind(this, null, null),
      style: {
        cursor: 'context-menu'
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 525,
        columnNumber: 13
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 526,
        columnNumber: 15
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 527,
        columnNumber: 15
      }
    }), this.props.otherData.wSubType === 'other' && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "subtype-container",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 529,
        columnNumber: 17
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Wdata, {
      wsData: this.props.otherData.wsData,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 530,
        columnNumber: 19
      }
    })), (folderitems || fileitems) && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: classes.root,
      key: "folderkey",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 535,
        columnNumber: 17
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "fileContainer",
      ref: this.toggleContainer,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 536,
        columnNumber: 19
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 537,
        columnNumber: 21
      }
    }, folderitems.map(({
      _id,
      folderName
    }) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
      key: _id,
      className: classes.folder,
      onClick: this.onSelectFolder.bind(this, _id),
      onContextMenu: this.onrightClick.bind(this, 'folder', _id),
      onDoubleClick: this.openFolder.bind(this, this.props.wid, folderName),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 540,
        columnNumber: 27
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      id: _id + "icon",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 545,
        columnNumber: 29
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_Folder__WEBPACK_IMPORTED_MODULE_9___default.a, {
      className: classes.foldericon,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 546,
        columnNumber: 31
      }
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
      id: _id + "name",
      className: "foldername",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 547,
        columnNumber: 29
      }
    }, folderName))), fileitems.map(({
      _id,
      fileName,
      fileStatus
    }) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
      key: _id,
      className: classes.folder,
      onClick: this.onSelectFolder.bind(this, _id),
      onContextMenu: this.onrightClick.bind(this, 'file', _id),
      onDoubleClick: this.openFile.bind(this, 'FileViewer', this.props.wid, fileName, fileStatus),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 553,
        columnNumber: 27
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      id: _id + "icon",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 558,
        columnNumber: 29
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_InsertDriveFile__WEBPACK_IMPORTED_MODULE_18___default.a, {
      className: classes.foldericon,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 559,
        columnNumber: 31
      }
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
      id: _id + "name",
      className: "foldername",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 560,
        columnNumber: 29
      }
    }, fileName)))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Menu__WEBPACK_IMPORTED_MODULE_26__["default"], {
      color: "secondary",
      keepMounted: true,
      open: this.state.mouseY !== null,
      onClose: this.handleClose.bind(this),
      anchorReference: "anchorPosition",
      anchorPosition: this.state.mouseY !== null && this.state.mouseX !== null ? {
        top: this.state.mouseY,
        left: this.state.mouseX
      } : undefined,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 568,
        columnNumber: 15
      }
    }, this.state.rightClickedOn === null && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_27__["default"], {
      onClick: () => {
        const newfoldername = prompt('Enter Folder Name');

        if (newfoldername) {
          this.setState({
            mouseX: null,
            mouseY: null
          });
          axios__WEBPACK_IMPORTED_MODULE_1___default.a.post('/explorer/folder', {
            fname: newfoldername,
            ftype: 'folder',
            fsize: 0,
            fpath: this.props.currPath.currentPath.toString().replace(/,/g, '/')
          }).then(res => {
            this.props.dataExchange({
              waction: 'createFolder',
              wid: this.props.wid,
              folderitems: res.data
            });
          });
        }
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 582,
        columnNumber: 19
      }
    }, "Create folder"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_27__["default"], {
      onClick: () => {
        this.setState({
          mouseX: null,
          mouseY: null,
          uploadfileOpen: true
        });
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 607,
        columnNumber: 17
      }
    }, "Upload file"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Modal__WEBPACK_IMPORTED_MODULE_28__["default"], {
      open: this.state.uploadfileOpen,
      onClose: () => {
        this.setState({
          uploadfileOpen: false
        });
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 614,
        columnNumber: 17
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: classes.uploadfile,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 617,
        columnNumber: 19
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
      method: "POST",
      onSubmit: this.uploadFile.bind(this, this.props.wid),
      encType: "multipart/form-data",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 618,
        columnNumber: 21
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 619,
        columnNumber: 23
      }
    }, "Upload File"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 619,
        columnNumber: 49
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 619,
        columnNumber: 55
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
      type: "file",
      id: "customFile",
      onChange: this.fileUploadonChange.bind(this),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 620,
        columnNumber: 23
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 620,
        columnNumber: 106
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
      type: "text",
      id: "customFilename",
      onChange: this.fileNameonChange.bind(this),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 621,
        columnNumber: 23
      }
    }), " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 621,
        columnNumber: 109
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 621,
        columnNumber: 115
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
      type: "submit",
      value: "Upload",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 622,
        columnNumber: 23
      }
    }, "Upload")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_27__["default"], {
      onClick: this.openWindowAlt.bind(this, this.props.wid, 'Terminal', 'Help', "Help"),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 626,
        columnNumber: 17
      }
    }, "Terminal (help)"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_27__["default"], {
      onClick: this.openWindowAlt.bind(this, this.props.wid, 'Terminal', 'Aboutme', "AboutMe"),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 627,
        columnNumber: 17
      }
    }, "About Me"), this.state.rightClickedOn != null && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_27__["default"], {
      onClick: () => {
        this.props.dataExchange({
          waction: 'deleteF',
          wid: this.props.wid,
          fType: this.state.selectType,
          fid: this.state.rightClickedOn
        });
        this.setState({
          mouseX: null,
          mouseY: null,
          rightClickedOn: null
        });
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 629,
        columnNumber: 19
      }
    }, "Delete"))))));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (recompose_compose__WEBPACK_IMPORTED_MODULE_7___default()(Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_10__["withStyles"])(styles, {
  withTheme: true
}))(Explorer));

/***/ })

})
//# sourceMappingURL=main.5d10bd8cc226b13c6af1.hot-update.js.map