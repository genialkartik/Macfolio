import React, { Component } from 'react';
import axios from 'axios'

import './macos.css';
import date from 'date-and-time';
import Nowind from './components/Nowind'
import RightSideBar from './components/layouts/RightSideBar'
import * as Windows from './components/layouts'
import $ from 'jquery'
import WifiIcon from '@material-ui/icons/Wifi';
import BatteryStdIcon from '@material-ui/icons/BatteryStd';
import BatteryChargingFullIcon from '@material-ui/icons/BatteryChargingFull';


$(document).ready(function () {
  // if on Mobile
  $(function () {
    if (parseInt($("body").css("width")) < 700) {
      window.alert("Kindly, visit on PC for responsive viewport.\nOr select 'Request Desktop Site' in your browser");
    }
  });

  // Chaining
  $(".top-menu-bar").delay().animate({ top: '0' }, "slow");
  $(".docker-container").delay().animate({ bottom: '0' }, "fast",)
    .delay(1000).promise().done(initiatedemo);

  //   --> initiate docker hint and upper docker hint
  function initiatedemo() {
    $(".doc-demo").css({ "border-top": "1px solid #424242", "font-size": "0.7em" }) //docker hint
      .delay(2000).promise().done(rminitiatedemo);
  }
  //   --> finish demo
  function rminitiatedemo() {
    $(".doc-demo").css({ "font-size": "0em" })
      .delay(1000).promise().done(removeHint);
  }
  function removeHint() {
    $(".doc-demo").css({ "display": "none" })
  }
})

class App extends Component {

  constructor() {
    super()
    this.state = {
      // windowitems is for windows to open
      windowId: 0,
      windowItems: [],
      // FIleViewer
      fileViewer: [],
      // data & info send to Explorer and subExplorer
      otherData: [],
      // system information
      sysInfo: [false, 59],
      // current Path 
      currPath: [],
      // window position
      winPos: [],
    }
  }
  componentDidMount() {
    axios.get('/visidata')
      .then(res => {
        this.setState({
          sysInfo: res.data
        })
      })
  }

  winPos = (returnData) => {
    let copywinPos = [...this.state.winPos]
    // eslint-disable-next-line
    this.state.winPos.map((wPos, index) => {
      if (returnData.wid === wPos.id) {
        copywinPos.splice(index, 1,
          {
            id: returnData.wid,
            left: returnData.diffX,
            top: returnData.diffY
          })
      }
    })
    this.setState({
      winPos: copywinPos
    })
  }

  todataExchange(returnData) {

    // to close window
    if (returnData.waction === 'closeWindow') {
      this.setState(({ windowItems }) => ({
        windowItems: windowItems.filter(e => e.id !== returnData.wid)
      }))
      this.setState(({ fileViewer }) => ({
        fileViewer: fileViewer.filter(e => e.id !== returnData.wid)
      }))
      this.setState(({ otherData }) => ({
        otherData: otherData.filter(e => e.id !== returnData.wid)
      }))
      this.setState(({ currPath }) => ({
        currPath: currPath.filter(e => e.id !== returnData.wid)
      }))
      this.setState(({ winPos }) => ({
        winPos: winPos.filter(e => e.id !== returnData.wid)
      }))
    }
    // to open file 
    if (returnData.waction === 'FileViewer') {
      this.setState(state => ({
        fileViewer: [...state.fileViewer, {
          id: this.state.windowId + 1,
          fileType: returnData.waction,
          filename: returnData.wdata,
          fileStatus: returnData.fileStatus
        }]
      }))
      this.setState({
        windowId: this.state.windowId + 1
      })
      this.winPos(returnData);
    }
    // open Folder
    if (returnData.waction === 'openFolder') {
      axios.get('/explorer/folder', { params: { wpath: returnData.currPath } })
        .then(res => {
          var items = res.data
          var folders = items.filter(item => item.itemType === 'folder')
          var files = items.filter(item => item.itemType !== 'folder')
          this.setState(state => {
            // eslint-disable-next-line
            const windItems = state.windowItems.map((windows) => {
              if (returnData.wid === windows.id) {
                return (
                  windows.folderitems = folders,
                  windows.fileitems = files
                )
              }
            })
            return { windItems }
          })
          let copycurrPath = [...this.state.currPath]
          // eslint-disable-next-line
          this.state.currPath.map((cPath, index) => {
            if (returnData.wid === cPath.id) {
              copycurrPath.splice(index, 1,
                {
                  id: returnData.wid,
                  currentPath: returnData.currentPath
                })
            }
          })
          this.setState({
            currPath: copycurrPath
          })
          this.winPos(returnData);
        })
    }
    if (returnData.waction === 'changewsData') {
      // find a better approach to do that
      let copyOtherData = [...this.state.otherData]
      // eslint-disable-next-line
      this.state.otherData.map((oData, index) => {
        if (returnData.id === oData.id) {
          copyOtherData.splice(
            index,
            1,
            {
              id: returnData.id,
              wSubType: returnData.wsubtype,
              wsData: returnData.wsdata
            }
          )
        }
      })
      this.setState({
        otherData: copyOtherData
      })
      this.setState(state => {
        // eslint-disable-next-line
        const windItems = state.windowItems.map((windows) => {
          if (returnData.id === windows.id) {
            return (
              windows.windowData = returnData.wdata,
              windows.folderitems = [],
              windows.fileitems = []
            )
          }
        })
        return { windItems }
      })
      this.winPos(returnData);
    }
    // to open WindowAlt 
    if (returnData.waction === 'createFolder') {
      this.setState(state => {
        // eslint-disable-next-line
        const windItems = state.windowItems.map((windows, index) => {
          if (windows.id === returnData.wid) {
            return (
              window.folderitems = windows.folderitems.push(returnData.folderitems)
            )
          }
        })
        return { windItems }
      })
    }
    if (returnData.waction === 'deleteF') {
      if (returnData.fType === 'folder') {
        axios.delete(`/explorer/folder`, { params: { delId: returnData.fid } })
          .then(
            this.setState(state => {
              // eslint-disable-next-line
              const windItems = state.windowItems.map((windows) => {
                if (windows.id === returnData.wid) {
                  return (
                    windows.folderitems = windows.folderitems.filter(item => item._id !== returnData.fid)
                  )
                }
              })
              return { windItems }
            })
          )
      } else {
        axios.delete(`/explorer/file`, { params: { delId: returnData.fid } })
          .then(
            this.setState(state => {
              // eslint-disable-next-line
              const windItems = state.windowItems.map((windows) => {
                if (windows.id === returnData.wid) {
                  return (
                    windows.fileitems = windows.fileitems.filter(item => item._id !== returnData.fid)
                  )
                }
              })
              return { windItems }
            })
          )
      }
    }
    if (returnData.waction === 'uploadItem') {
      axios.post(`/explorer/file`, returnData.formdata)
        .then(res => (
          this.setState(state => {
            // eslint-disable-next-line
            const windItems = state.windowItems.map((windows) => {
              if (windows.id === returnData.wid) {
                return (
                  window.fileitems = windows.fileitems.push(res.data)
                )
              }
            })
            return { windItems }
          })
        )
        )
    }
    if (returnData.waction === 'Terminal') {
      this.setState(state => ({
        windowItems: [...state.windowItems, {
          id: this.state.windowId + 1,
          windowType: returnData.waction,
          windowData: returnData.wdata,
          windowName: returnData.wname,
          folderitems: [],
          fileitems: []
        }]
      }))
      this.setState({ windowId: this.state.windowId + 1 })
      this.winPos(returnData);
    }
    if (returnData.waction === 'openWindow') {
      this.openWindow(returnData.otherdata, returnData.wtype, returnData.wdata, returnData.wname)
    }
  }
  // open new window
  openWindow(otherdata, wtype, wdata, wname) {
    if (wtype === 'Terminal') {
      this.setState(state => ({
        windowItems: [...state.windowItems, {
          id: this.state.windowId + 1,
          windowName: wname,
          windowType: wtype,
          windowData: wdata,
          folderitems: [],
          fileitems: []
        }]
      }))

    } else {
      axios.get('/explorer/folder', { params: { wpath: wdata } })
        .then(res => {
          let items = res.data
          let folders = items.filter(item => item.itemType === 'folder')
          let files = items.filter(item => item.itemType !== 'folder')
          this.setState(state => ({
            windowItems: [...state.windowItems, {
              id: this.state.windowId,
              windowName: wname,
              windowType: wtype,
              windowData: wdata,
              folderitems: folders,
              fileitems: files,
            }]
          }))
          this.setState(state => ({
            currPath: [...state.currPath, {
              id: this.state.windowId,
              currentPath: [wdata]
            }]
          }))
        })
    }
    this.setState({
      windowId: this.state.windowId + 1,
      otherData: [...this.state.otherData, {
        id: this.state.windowId + 1,
        wSubType: otherdata.wSubType,
        wsData: otherdata.wsData
      }],
      winPos: [...this.state.winPos, {
        id: this.state.windowId + 1,
        left: "350px",
        top: "120px"
      }]
    })
  }


  render() {
    const { windowItems, fileViewer } = this.state;
    const now = new Date()

    return (
      <div id="mac-cont">
        {/* ////////   Upper Docker  /////////// */}
        < div className="top-menu-bar" >
          <div className="upper-docker-conn" id="upr-dkr-conn">
            <div className="up-do-container" id="up-do-conn-id">
              <div className="up-do-left">
                <ul>
                  <li>
                    <div id="up-do-logo">
                      <img src={require('./assets/icons/apple.png')} alt="" />
                    </div>
                  </li>
                  <li>
                    <div id="opn-wndw">
                      <span className="abo-doc hnthvr udllst01"
                        onClick={this.openWindow.bind(this, { wSubType: 'other', wsData: null }, 'Terminal', 'Aboutme', "About Me")}
                      >@tyagi</span>
                    </div>
                  </li>
                  <li>
                    <div id="up-do-menu">
                      <ul>
                        <li className="abo-doc hnthvr udllst02"
                          onClick={this.openWindow.bind(this, { wSubType: 'other', wsData: 'devtoblogs' }, 'Explorer', 'Connect', "Blogs")}
                        >Blog</li>
                        <li className="abo-doc hnthvr udllst03"
                          onClick={this.openWindow.bind(this, { wSubType: 'files', wsData: null }, 'Terminal', 'Resume', "Resume")}
                        >Resume</li>
                        <li className="abo-doc hnthvr udllst04"
                          onClick={this.openWindow.bind(this, { wSubType: 'files', wsData: null }, 'Terminal', 'Contact', "Contact me")}
                        >Contact Me</li>
                        <li className="abo-doc hnthvr udllst05"
                          onClick={this.openWindow.bind(this, { wSubType: 'files', wsData: null }, 'Terminal', 'Help', "Help")}
                        >Help</li>
                      </ul>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="up-do-right">
                <div id="udr-id">
                  <ul>
                    <li><img className="onHover" id="ryt-menu-nav" src={require('./assets/icons/menu.png')} alt="" /></li>
                    <li><img className="onHover" src={require('./assets/icons/search.png')} alt="" /></li>
                    <li><img className="onHover" onClick={this.openWindow.bind(this, { wSubType: 'files', wsData: null }, 'Terminal', 'Help', "Help")}
                      src={require('./assets/icons/terminal.png')} alt="" /></li>
                    {/* <li><div id="clockbox"></div></li> */}
                    <li><div id="">{date.format(now, 'ddd hh:mm A')}</div></li>
                    {
                      this.state.sysInfo[0] ?
                        <li style={{ rotate: '90deg', marginLeft: '-5px', marginTop: '-3px' }}><BatteryChargingFullIcon /></li> :
                        <li style={{ rotate: '90deg', marginLeft: '-5px', marginTop: '-3px' }}><BatteryStdIcon /></li>
                    }
                    <li><span>{this.state.sysInfo[1] ? this.state.sysInfo[1] : 55}%</span></li>
                    <li><WifiIcon /></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div >

        {/* //// Right Side Navigation //// */}
        < RightSideBar dataExchange={this.todataExchange.bind(this)} />

        {/* To open FileViewer */}
        < div id="fileviewerid" >
          {
            fileViewer.map(({ id, fileType, filename, fileStatus }) => (
              this.renderFile(id, fileType, filename, fileStatus)
            ))
          }
        </div >

        {/* //// Explorer and Terminal //// */}
        < div className="window-cont" id="window-cont" >
          {
            windowItems.map(({ id, windowType, windowData, windowName, folderitems, fileitems }) => (
              this.renderSelectedWindow(id, windowType, windowData, windowName, folderitems, fileitems)
            ))
          }
        </div >

        <div className="docker-container" id="docker-container-id">
          <div id="docker-inner-cont">
            <div className="docker-conn">
              <ul>
                <li>
                  <span className="doc-demo">About</span>
                  <img className="dcimg" id="abo-doc"
                    onClick={this.openWindow.bind(this, { wSubType: 'other', wsData: null }, 'Terminal', 'Aboutme', "AboutMe")}
                    src={require('./assets/icons/About.png')} alt="" />
                </li>
                <li>
                  <span className="doc-demo">Academics   </span>
                  <img className="dcimg" id="aca-doc"
                    onClick={this.openWindow.bind(this, { wSubType: 'files', wsData: null }, 'Explorer', 'Academics', "Academics")}
                    src={require('./assets/icons/academics.png')} alt="" />
                </li>
                <li>
                  <span className="doc-demo">Skills      </span>
                  <img className="dcimg" id="ski-doc"
                    onClick={this.openWindow.bind(this, { wSubType: 'other', wsData: 'language' }, 'Terminal', 'Languages', "Skills")}
                    src={require('./assets/icons/skills.png')} alt="" /></li>
                <li>
                  <span className="doc-demo">Softwares   </span>
                  <img className="dcimg" id="sof-doc"
                    onClick={this.openWindow.bind(this, { wSubType: 'other', wsData: 'softwares' }, 'Explorer', 'Miscellaneous', "Softwares")}
                    src={require('./assets/icons/softwares.png')} alt="" /></li>
                <li>
                  <span className="doc-demo">Experience  </span>
                  <img className="dcimg" id="exp-doc"
                    onClick={this.openWindow.bind(this, { wSubType: 'files', wsData: null }, 'Explorer', 'Experience', "Experience")}
                    src={require('./assets/icons/experience.png')} alt="" /></li>
                <li>
                  <span className="doc-demo">projects    </span>
                  <img className="dcimg" id="pro-doc"
                    onClick={this.openWindow.bind(this, { wSubType: 'other', wsData: 'githubprofile' }, 'Explorer', 'Connect', "Projects")}
                    src={require('./assets/icons/projects.png')} alt="" /></li>
                <li>
                  <span className="doc-demo">Languages   </span>
                  <img className="dcimg" id="lan-doc"
                    onClick={this.openWindow.bind(this, { wSubType: 'other', wsData: 'language' }, 'Terminal', 'Languages', "Languages")}
                    src={require('./assets/icons/Languages.png')} alt="" /></li>
                <li>
                  <span className="doc-demo">acheivements</span>
                  <img className="dcimg" id="ach-doc"
                    onClick={this.openWindow.bind(this, { wSubType: 'files', wsData: null }, 'Explorer', 'Acheivements', "Certification")}
                    src={require('./assets/icons/acheivements.png')} alt="" /></li>
                <li>
                  <span className="doc-demo">Courses     </span>
                  <img className="dcimg" id="cou-doc"
                    onClick={this.openWindow.bind(this, { wSubType: 'files', wsData: null }, 'Explorer', 'Courses', "Courses")}
                    src={require('./assets/icons/courses.png')} alt="" /></li>
                {/* <li>
                  <span className="doc-demo">hobbies     </span>
                  <img className="dcimg" id="hob-doc"
                    onClick={this.openWindow.bind(this, { wSubType: 'other', wsData: 'hobbies' }, 'Explorer', 'Miscellaneous', "Hobbies")}
                    src={require('./assets/icons/hobbies.png')} alt="" /></li> */}
                <li>
                  <span className="doc-demo">connect     </span>
                  <img className="dcimg" id="con-doc"
                    onClick={this.openWindow.bind(this, { wSubType: 'other', wsData: 'devtoblogs' }, 'Explorer', 'Connect', "Connect")}
                    src={require('./assets/icons/connect.png')} alt="" /></li>
                <li>
                  <span className="doc-demo">Gallery     </span>
                  <img className="dcimg" id="gal-doc"
                    onClick={this.openWindow.bind(this, { wSubType: 'other', wsData: 'hobbies' }, 'Explorer', 'Miscellaneous', "Gallery")}
                    src={require('./assets/icons/gallery.png')} alt="" /></li>
                <li>
                  <span className="doc-demo">Resume      </span>
                  <img className="dcimg" id="res-doc"
                    onClick={this.openWindow.bind(this, { wSubType: 'files', wsData: null }, 'Terminal', 'Resume', "Resume")}
                    src={require('./assets/icons/resume.png')} alt="" /></li>
                <li>
                  <span className="doc-demo">Help?       </span>
                  <img className="dcimg" id="help-doc"
                    onClick={this.openWindow.bind(this, { wSubType: 'files', wsData: null }, 'Terminal', 'Help', "Help")}
                    src={require('./assets/icons/help.png')} alt="" /></li>
                <li>
                  <span className="doc-demo">Contact     </span>
                  <img className="dcimg" id="cont-doc"
                    onClick={this.openWindow.bind(this, { wSubType: 'files', wsData: null }, 'Terminal', 'Contact', "ContactMe")}
                    src={require('./assets/icons/contactme.png')} alt="" /></li>
                <li>
                  <span className="doc-demo">Blogs       </span>
                  <img className="dcimg" id="blog-doc"
                    onClick={this.openWindow.bind(this, { wSubType: 'other', wsData: 'devtoblogs' }, 'Explorer', 'Connect', "Blogs")}
                    src={require('./assets/icons/blog.png')} alt="" /></li>
                <li>
                  <span className="doc-demo">Feedback    </span>
                  <img className="dcimg" id="thi-doc"
                    onClick={this.openWindow.bind(this, { wSubType: 'other', wsData: null }, 'Explorer', 'Feedback', "Feedback")}
                    src={require('./assets/icons/thinkbin.png')} alt="" /></li>
              </ul>
            </div>
          </div>
        </div>
      </div >
    )

  }
  // render file viewer
  renderFile(id, ftype, fname, fStatus) {
    let Window = Windows[ftype]
    if (!ftype || !fname) {
      return (<div key={id}><Nowind /></div>)
    }
    else {
      return (
        <div key={id + Number(Math.random())}>
          <Window filename={fname} fileStatus={fStatus} wid={id} dataExchange={this.todataExchange.bind(this)} />
        </div>
      )
    }
  }
  renderSelectedWindow(id, wtype, wdata, wname, wfolders, wfiles) {
    let Window = Windows[wtype]
    let tempoData;
    let tempcurrPath;
    let tempwPos;
    // eslint-disable-next-line
    this.state.otherData.map((oData) => {
      if (oData.id === id) {
        tempoData = oData
      }
    })
    // eslint-disable-next-line
    this.state.currPath.map((cPath) => {
      if (cPath.id === id) {
        tempcurrPath = cPath
      }
    })
    // eslint-disable-next-line
    this.state.winPos.map((wPos) => {
      if (wPos.id === id) {
        tempwPos = wPos
      }
    })


    if (!wtype || !wdata) {
      return (<div key={id}> <Nowind /></div>)
    }
    else {
      return (
        <div key={id + Number(Math.random())}>
          <Window
            wid={id}
            otherData={tempoData}
            currPath={tempcurrPath}
            winPos={tempwPos}
            windItem={wdata}
            windName={wname}
            windowFiles={wfiles}
            windowFolders={wfolders}
            dataExchange={this.todataExchange.bind(this)} />
        </div>
      )
    }
  }
}

export default App