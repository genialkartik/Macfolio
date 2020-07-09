import React from 'react'
import '../terminal/terminal.css'
import './explorer.css'
import * as windData from '../../windows/index'
import Draggable from 'react-draggable'
import $ from 'jquery'



class Explorer extends React.Component { 
    
    closeW(clsid){
        this.props.closeWindow(clsid)
    }
    resizeWindow(wid){
        console.log($('.wdt-right').css('width'))
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
                width: widthOfBody-210+"px"
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
                width: "82%"
            })
        }
    }
    activeWindow(wid){
        $('.wind-con').css({
            zIndex: "100"
        })
        $("#wc"+wid).css({
            zIndex: "1000"
        })

    }

    render(){
    const Wdata = windData[this.props.windItem]  //passing data back to MacOS  
    var windConId = "wc"+this.props.wid  
    return (
        <Draggable>
        <div className="wind-con" id={windConId} onClick={this.activeWindow.bind(this, this.props.wid)}>
            <div id="wind-up-tab">
                <ul>
                    <li id="closetab" className="wintab" onClick={this.closeW.bind(this, this.props.wid)}>
                    </li>
                    <li id="minimztab" className="wintab" onClick={this.closeW.bind(this, this.props.wid)}></li>
                    <li id="tabsize" className="wintab" onClick={this.resizeWindow.bind(this, this.props.wid)}></li>
                    <li id="opnd-wind-icon-thumbnail" className="opndwintab"><img src={require('../../../assets/icons/help.png')} alt="Window" /></li>
                    <li className="opndwintab">{this.props.windItem}</li>
                </ul>
            </div>
            
            <div id="wind-ter-conn">
            <div class="wind-up-low">
                <div id="wul-conn">
                    <img src={require('../../../assets/graphics/explorer-wulc.png')} alt=""/>
                </div>
            </div>
            <div class="wdt-left">
              <ul>
                <br/>
                <li class="llc">Library</li>
                <div class="lib-list ulul" id="ll-id">
                  <ul>
                    <li><img src={require('../../../assets/graphics/home.png') } alt="" />
                      <span> About</span></li>
                    <li>
                      <img src={require('../../../assets/graphics/connect.png') } alt="" />
                      <span> Connect</span></li>
                    <li>
                      <img src={require('../../../assets/graphics/skill.png') } alt="" />
                      <span> Skills</span></li>
                    <li>
                      <img src={require('../../../assets/graphics/courses.png') } alt="" />
                      <span> Experience</span></li>
                    <li>
                      <img src={require('../../../assets/graphics/experience.png') } alt="" />
                      <span> Courses</span></li>
                    <li>
                      <img src={require('../../../assets/graphics/heart.png') } alt="" />
                      <span> Interest</span></li>
                    <li>
                      <img src={require('../../../assets/graphics/thinkbin.png') } alt="" />
                      <span> Thinkbin</span></li>
                    <li>
                      <img src={require('../../../assets/graphics/blog.png') } alt="" />
                      <span> Blogs</span></li>
                    <li>
                      <img src={require('../../../assets/graphics/gallery.png') } alt="" />
                      <span> Gallery</span></li>
                  </ul>
                </div>
                <li class="llc">Shared</li>
                <div class="shr-list ulul" id="sl-id">
                  <ul>
                    <li>
                        <img src={require('../../../assets/graphics/heart.png') } alt="" />
                        <span> Feedback</span></li>
                  </ul>
                  </div>
                  <li class="llc">Albums</li>
                  <div class="albums-list ulul" id="al-id">
                    <ul>
                    <li>
                        <img src={require('../../../assets/graphics/gallery.png') } alt="" />
                        <span> Gallery</span></li>
                    <li>
                          <img src={require('../../../assets/graphics/media.png') } alt="" />
                          <span> Media</span></li>
                    </ul>
                  </div>
                      <li class="llc">Projects</li>
                      <div class="projects-list ulul" id="pl-id">
                        <ul>
                          <li>
                            <img src={require('../../../assets/graphics/github white.png') } alt="" />
                            <span> GitHub</span></li>
                        </ul>
                        </div>
                      </ul>
                    </div>
                    <div class="wdt-right">
                        <br/>
                        <br/>
                        <Wdata />
                    </div>
                
            </div>
        </div>
        </Draggable>
    )}
}

export default Explorer;