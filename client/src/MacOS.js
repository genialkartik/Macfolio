import React, { Component } from 'react';
import axios from 'axios'

// import $ from 'jquery'
import './macos.css';
import Nowind from './components/Nowind'
import RightSideBar from './components/layouts/RightSideBar'
import * as Windows from './components/layouts'


// $(document).ready(function(){
//   // if on Mobile
//   $(function(){
//      if(parseInt($("body").css("width")) < 700){
//        window.alert("Kindly, visit on PC for responsive viewport.\nOr select 'Request Desktop Site' in your browser");
//      }
//    });

//    // Chaining
//  $(".top-menu-bar").delay().animate({top: '0'}, "slow");
//  $(".docker-container").delay().animate({bottom: '0'}, "fast",)
//  .delay(1000).promise().done(initiatedemo);

//  //   --> initiate docker hint and upper docker hint
//  function initiatedemo(){
//    $(".doc-demo").css({"border-top": "1px solid #424242","font-size": "0.7em"}) //docker hint
//    .delay(2000).promise().done(rminitiatedemo);
//  }
//  //   --> finish demo
//  function rminitiatedemo(){
//    $(".doc-demo").css("font-size", "0em")
//  }
// })

class App extends Component {

  constructor() {
    super()
    this.state = {
      // windowitems is for windows to open
      windowId: 0,
      windowItems: [],
      // FIleViewer
      fileViewer: [],

    }
  }

  todataExchange(returnData) {
    // to close window
    if (returnData.waction === 'closeWindow') {
      this.setState(({ windowItems }) => ({
        windowItems: windowItems.filter(e => e.id !== returnData.wid)
      }));
      this.setState(({ fileViewer }) => ({
        fileViewer: fileViewer.filter(e => e.id !== returnData.wid)
      }));
      this.setState({ windowId: this.state.windowId - 1 })
    }
    // to open file 
    if (returnData.waction === 'FileViewer') {
      this.setState(state => ({
        fileViewer: [...state.fileViewer, {
          id: returnData.wid,
          fileType: returnData.waction,
          filename: returnData.wdata
        }]
      }))
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
            const windItems = state.windowItems.map((windows, index) => {
              if (index === returnData.wid) {
                return (
                  windows.folderitems = folders,
                  windows.fileitems = files
                )
              }
            })
            return { windItems }
          })
        })
    }
    // to open WindowAlt 
    if (returnData.waction === 'createFolder') {
      this.setState(state => {
        // eslint-disable-next-line
        const windItems = state.windowItems.map((windows, index) => {
          if (index === returnData.wid) {
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
        axios.delete(`explorer/folder`, { params: { delId: returnData.fid } })
          .then(
            this.setState(state => {
              // eslint-disable-next-line
              const windItems = state.windowItems.map((windows, index) => {
                if (index === returnData.wid) {
                  return (
                    windows.folderitems = windows.folderitems.filter(item => item._id !== returnData.fid)
                  )
                }
              })
              return { windItems }
            })
          )
      } else {
        axios.delete(`explorer/file`, { params: { delId: returnData.fid } })
          .then(
            this.setState(state => {
              // eslint-disable-next-line
              const windItems = state.windowItems.map((windows, index) => {
                if (index === returnData.wid) {
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
            const windItems = state.windowItems.map((windows, index) => {
              if (index === returnData.wid) {
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
          id: this.state.windowId,
          windowType: returnData.waction,
          windowData: returnData.wdata,
          folderitems: [],
          fileitems: []
        }]
      }))
      this.setState({ windowId: this.state.windowId + 1 })
    }
  }

  openWindow(wtype, wdata) {
    if (wtype === 'Terminal') {
      this.setState(state => ({
        windowItems: [...state.windowItems, {
          id: this.state.windowId,
          windowType: wtype,
          windowData: wdata,
          folderitems: [],
          fileitems: []
        }]
      }))
      this.setState({ windowId: this.state.windowId + 1 })
    } else {
      axios.get('/explorer/folder', { params: { wpath: wdata } })
        .then(res => {
          var items = res.data
          var folders = items.filter(item => item.itemType === 'folder')
          var files = items.filter(item => item.itemType !== 'folder')
          this.setState(state => ({
            windowItems: [...state.windowItems, {
              id: this.state.windowId,
              windowType: wtype,
              windowData: wdata,
              folderitems: folders,
              fileitems: files,
            }]
          }))
          this.setState({ windowId: this.state.windowId + 1 })
        })
    }
  }


  render() {
    const { windowItems, fileViewer } = this.state;
    return (
      <div>
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
                      <span className="abo-doc hnthvr udllst01">@tyagi</span>
                    </div>
                  </li>
                  <li>
                    <div id="up-do-menu">
                      <ul>
                        <li className="abo-doc hnthvr udllst02">Blog</li>
                        <li className="abo-doc hnthvr udllst03">Resume</li>
                        <li className="abo-doc hnthvr udllst04">Contact Me</li>
                        <li className="abo-doc hnthvr udllst05">Help</li>
                      </ul>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="up-do-right">
                <div id="udr-id">
                  <ul>
                    <li><img id="ryt-menu-nav" src={require('./assets/icons/menu.png')} alt="" /></li>
                    <li><img src={require('./assets/icons/search.png')} alt="" /></li>
                    <li><img src={require('./assets/icons/terminal.png')} alt="" /></li>
                    {/* <li><div id="clockbox"></div></li> */}
                    <li><div id="">12:00 AM</div></li>
                    <li><img src={require('./assets/icons/battery.png')} alt="" /></li>
                    <li><span style={{ marginRight: -3 + 'px' }}>50%</span></li>
                    <li><img style={{ top: 1 + 'px' }} src={require('./assets/icons/wifi.png')} alt="" /></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div >

        {/* //// Right Side Navigation //// */}
        < RightSideBar />

        {/* To open FileViewer */}
        < div id="fileviewerid" >
          {
            fileViewer.map(({ id, fileType, filename }) => (
              this.renderFile(id, fileType, filename)
            ))
          }
        </div >

        {/* //// Explorer and Terminal //// */}
        < div className="window-cont" id="window-cont" >
          {
            windowItems.map(({ id, windowType, windowData, folderitems, fileitems }) => (
              this.renderSelectedWindow(id, windowType, windowData, folderitems, fileitems)
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
                    onClick={this.openWindow.bind(this, 'Terminal', 'Aboutme')}
                    src={require('./assets/icons/About.png')} alt="" />
                </li>
                <li>
                  <span className="doc-demo">Academics   </span>
                  <img className="dcimg" id="aca-doc"
                    onClick={this.openWindow.bind(this, 'Explorer', 'Academics')}
                    src={require('./assets/icons/academics.png')} alt="" />
                </li>
                <li>
                  <span className="doc-demo">Skills      </span>
                  <img className="dcimg" id="ski-doc"
                    onClick={this.openWindow.bind(this, 'Explorer', 'Skills')}
                    src={require('./assets/icons/skills.png')} alt="" /></li>
                <li>
                  <span className="doc-demo">Softwares   </span>
                  <img className="dcimg" id="sof-doc"
                    onClick={this.openWindow.bind(this, 'Explorer', 'Resume')}
                    src={require('./assets/icons/softwares.png')} alt="" /></li>
                <li>
                  <span className="doc-demo">Experience  </span>
                  <img className="dcimg" id="exp-doc"
                    onClick={this.openWindow.bind(this, 'Explorer', 'Resume')}
                    src={require('./assets/icons/experience.png')} alt="" /></li>
                <li>
                  <span className="doc-demo">projects    </span>
                  <img className="dcimg" id="pro-doc"
                    onClick={this.openWindow.bind(this, 'Explorer', 'Resume')}
                    src={require('./assets/icons/projects.png')} alt="" /></li>
                <li>
                  <span className="doc-demo">Languages   </span>
                  <img className="dcimg" id="lan-doc"
                    onClick={this.openWindow.bind(this, 'Terminal', 'Languages')}
                    src={require('./assets/icons/Languages.png')} alt="" /></li>
                <li>
                  <span className="doc-demo">acheivements</span>
                  <img className="dcimg" id="ach-doc"
                    onClick={this.openWindow.bind(this, 'Explorer', 'Resume')}
                    src={require('./assets/icons/acheivements.png')} alt="" /></li>
                <li>
                  <span className="doc-demo">Courses     </span>
                  <img className="dcimg" id="cou-doc"
                    onClick={this.openWindow.bind(this, 'Explorer', 'Courses')}
                    src={require('./assets/icons/courses.png')} alt="" /></li>
                <li>
                  <span className="doc-demo">hobbies     </span>
                  <img className="dcimg" id="hob-doc"
                    onClick={this.openWindow.bind(this, 'Terminal', 'Aboutme')}
                    src={require('./assets/icons/hobbies.png')} alt="" /></li>
                <li>
                  <span className="doc-demo">connect     </span>
                  <img className="dcimg" id="con-doc"
                    onClick={this.openWindow.bind(this, 'Terminal', 'Aboutme')}
                    src={require('./assets/icons/connect.png')} alt="" /></li>
                <li>
                  <span className="doc-demo">Gallery     </span>
                  <img className="dcimg" id="gal-doc"
                    onClick={this.openWindow.bind(this, 'Explorer', 'Resume')}
                    src={require('./assets/icons/gallery.png')} alt="" /></li>
                <li>
                  <span className="doc-demo">Resume      </span>
                  <img className="dcimg" id="res-doc"
                    onClick={this.openWindow.bind(this, 'Terminal', 'Resume')}
                    src={require('./assets/icons/resume.png')} alt="" /></li>
                <li>
                  <span className="doc-demo">Help?       </span>
                  <img className="dcimg" id="help-doc"
                    onClick={this.openWindow.bind(this, 'Terminal', 'Help')}
                    src={require('./assets/icons/help.png')} alt="" /></li>
                <li>
                  <span className="doc-demo">Contact     </span>
                  <img className="dcimg" id="cont-doc"
                    onClick={this.openWindow.bind(this, 'Terminal', 'Contact')}
                    src={require('./assets/icons/contactme.png')} alt="" /></li>
                <li>
                  <span className="doc-demo">Blogs       </span>
                  <img className="dcimg" id="blog-doc"
                    onClick={this.openWindow.bind(this, 'Explorer', 'Resume')}
                    src={require('./assets/icons/blog.png')} alt="" /></li>
                <li>
                  <span className="doc-demo">ThinkBin    </span>
                  <img className="dcimg" id="thi-doc"
                    onClick={this.openWindow.bind(this, 'Explorer', 'Resume')}
                    src={require('./assets/icons/thinkbin.png')} alt="" /></li>
              </ul>
            </div>
          </div>
        </div>
      </div >
    )

  }
  // render file viewer
  renderFile(id, ftype, fname) {
    let Window = Windows[ftype]
    if (!ftype || !fname) {
      return (<div key={id}><Nowind /></div>)
    }
    else {
      return (
        <div key={id}>
          <Window filename={fname} wid={id} dataExchange={this.todataExchange.bind(this)} />
        </div>
      )
    }
  }
  renderSelectedWindow(id, wtype, wdata, wfolders, wfiles) {
    let Window = Windows[wtype]
    if (!wtype || !wdata) {
      return (<div key={id}> <Nowind /></div>)
    }
    else {
      return (
        <div key={id}>
          <Window wid={id} windItem={wdata} windowFiles={wfiles} windowFolders={wfolders} dataExchange={this.todataExchange.bind(this)} />
        </div>
      )
    }
  }
}

export default App
