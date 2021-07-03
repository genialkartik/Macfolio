import React, { Component } from 'react'
import '../terminal/terminal.css'
import './fileviewer.css'
import Draggable from 'react-draggable'
import $ from 'jquery'
import { PDFReader } from 'reactjs-pdf-reader';


export default class FileViewer extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  closeW(clsid) {
    this.props.dataExchange({
      waction: 'closeWindow',
      wid: clsid
    })
  }
  resizeWindow(wid) {
    var temp = "#wc" + wid
    var widthOfWindow = parseInt($(temp).css("width")) / parseInt($('#root').css("width")) * 100
    if (widthOfWindow <= 99) {
      $(temp).css({
        "width": "100%",
        "height": "100%",
        "top": "48px",
        "left": "0",
        "transform": "translate(0%, 0%)"
      })
    } else {
      $(temp).css({
        "width": "60%",
        "height": "70%",
        "top": "10%",
        "left": "20%",
        "transform": "translate(0%, 0%)"
      })
    }
  }
  activeWindow(wid) {
    $('.wind-con').css({
      zIndex: "100"
    })
    $("#wc" + wid).css({
      zIndex: "1000"
    })

  }

  render() {
    var windConId = "wc" + this.props.wid
    var filename = this.props.filename
    let fileUrl = './documents/' + filename.replace(/\s/g, '')
    var fileType = filename.substring(filename.indexOf('.') + 1, filename.length)
    return (
      <Draggable>
        <div className="wind-con" id={windConId}
          style={{ left: Math.random() * 100 + 350 + 'px', top: Math.random() * 100 + 100 + 'px' }}
          onClick={this.activeWindow.bind(this, this.props.wid)}>
          <div id="wind-up-tab">
            <ul>
              <li id="closetab" className="wintab" onClick={this.closeW.bind(this, this.props.wid)}>
              </li>
              <li id="minimztab" className="wintab" onClick={this.closeW.bind(this, this.props.wid)}></li>
              <li id="tabsize" className="wintab" onClick={this.resizeWindow.bind(this, this.props.wid)}></li>
              <li id="opnd-wind-icon-thumbnail" className="opndwintab"><img src={require('../../../assets/icons/help.png')} alt="Window" /></li>
              <li className="opndwintab">{this.props.filename}</li>
            </ul>
          </div>

          <div id="wind-ter-conn">
            {(this.props.fileStatus) ?
              <img style={{ position: 'absolute', height: '100%', objectFit: 'contain', left: '50%', transform: 'translate(-50%)' }}
              src={'./documents/error401.png'} alt="error401" /> :
              <div>
                {(fileType === 'pdf') &&
                  <div className="pdfviewer-container">
                    <PDFReader url={fileUrl} showAllPage="true" />
                  </div>
                }
                {(fileType !== 'pdf') &&
                  <div >
                    <img style={{ position: 'absolute', height: '100%', objectFit: 'contain', left: '50%', transform: 'translate(-50%)' }}
                      src={fileUrl} alt="imageViewer" />
                  </div>
                }
              </div>
            }
          </div>
        </div>
      </Draggable>
    )
  }
}
