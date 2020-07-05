import React from 'react';
import './macos.css';
import TerminalLayout from './components/terminal'


function App() {
  return (
    <div>
    {/* ////////   Upper Docker  /////////// */}
    <div className="top-menu-bar">
    <div className="upper-docker-conn" id="upr-dkr-conn">
      <div className="up-do-container" id="up-do-conn-id">
        <div className="udl-hint">
          <ul>
            <li className="udlht udlhnt01" id="abme-hnt">About Me</li>
            <li className="udlht udlhnt03" id="res-hnt">Download Resume</li>
          </ul>
        </div>
        <div className="up-do-left">
          <ul>
            <li>
              <div id="up-do-logo">
                <img src={ require('./assets/icons/apple.png') } alt="" />
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
              <li><span style={{marginRight: -3+'px'}}>50%</span></li>
              <li><img style={{top:1+'px'}} src={require('./assets/icons/wifi.png')} alt="" /></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    </div>

    <div className="window-cont" id="window-cont">
      <TerminalLayout />
    </div>

    <div className="docker-container" id="docker-container-id">
    <div id="docker-inner-cont">
      <div className="docker-conn">
        <ul>
          <li>
            <span className="doc-demo">About</span>
            <img className="dcimg" id="abo-doc" src={require('./assets/icons/About.png')} alt="" /></li>
          <li>
            <span className="doc-demo">Academics   </span>
            <img className="dcimg" id="aca-doc" src={require('./assets/icons/academics.png')} alt="" /></li>
          <li>
            <span className="doc-demo">Skills      </span>
            <img className="dcimg" id="ski-doc" src={require('./assets/icons/skills.png')} alt="" /></li>
          <li>
            <span className="doc-demo">Languages   </span>
            <img className="dcimg" id="lan-doc" src={require('./assets/icons/Languages.png')} alt="" /></li>
          <li>
            <span className="doc-demo">Softwares   </span>
            <img className="dcimg" id="sof-doc" src={require('./assets/icons/softwares.png')} alt="" /></li>
          <li>
            <span className="doc-demo">Experience  </span>
            <img className="dcimg" id="exp-doc" src={require('./assets/icons/experience.png')} alt="" /></li>
          <li>
            <span className="doc-demo">projects    </span>
            <img className="dcimg" id="pro-doc" src={require('./assets/icons/projects.png')} alt="" /></li>
          <li>
            <span className="doc-demo">acheivements</span>
            <img className="dcimg" id="ach-doc" src={require('./assets/icons/acheivements.png')} alt="" /></li>
          <li>
            <span className="doc-demo">Courses     </span>
            <img className="dcimg" id="cou-doc" src={require('./assets/icons/courses.png')} alt="" /></li>
          <li>
            <span className="doc-demo">hobbies     </span>
            <img className="dcimg" id="hob-doc" src={require('./assets/icons/hobbies.png')} alt="" /></li>
          <li>
            <span className="doc-demo">connect     </span>
            <img className="dcimg" id="con-doc" src={require('./assets/icons/connect.png')} alt="" /></li>
          <li>
            <span className="doc-demo">Gallery     </span>
            <img className="dcimg" id="gal-doc" src={require('./assets/icons/gallery.png')} alt="" /></li>
          <li>
            <span className="doc-demo">Resume      </span>
            <img className="dcimg" id="res-doc" src={require('./assets/icons/resume.png')} alt="" /></li>
          <li>
            <span className="doc-demo">Help?       </span>
            <img className="dcimg" id="help-doc" src={require('./assets/icons/help.png')} alt="" /></li>
          <li>
            <span className="doc-demo">Contact     </span>
            <img className="dcimg" id="cont-doc" src={require('./assets/icons/contactme.png')} alt="" /></li>
          <li>
            <span className="doc-demo">Blogs       </span>
            <img className="dcimg" id="blog-doc" src={require('./assets/icons/blog.png')} alt="" /></li>
          <li>
            <span className="doc-demo">ThinkBin    </span>
            <img className="dcimg" id="thi-doc"  src={require('./assets/icons/thinkbin.png')} alt="" /></li>
        </ul>
      </div>
    </div>
    </div>
    </div>
  )
}

export default App;

