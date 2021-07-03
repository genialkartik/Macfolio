import React, { Component } from 'react'
import './miscellaneous.css'

class Miscellaneous extends Component {

  render() {
    const wsdata = this.props.wsData

    return (
      <div className="miscell-container">
        {(wsdata === 'hobbies') &&
          <div className="galleryconn">
            <li className="boximg proimg1">
              <img src={'./gallery/1.jpg'} alt="" />
            </li>
            <li className="boximg proimg2">
              <img src={'./gallery/2.jpg'} alt="" />
            </li>
            <li className="boximg proimg3">
              <img src={'./gallery/3.jpg'} alt="" />
            </li>
            <li className="boximg proimg3">
              <img src={'./gallery/4.jpg'} alt="" />
            </li>
            <li className="boximg proimg3">
              <img src={'./gallery/5.jpg'} alt="" />
            </li>
            <li className="boximg proimg1">
              <img src={'./gallery/6.jpg'} alt="" />
            </li>
            <li className="boximg proimg2">
              <img src={'./gallery/7.jpg'} alt="" />
            </li>
            <li className="boximg proimg3">
              <img src={'./gallery/8.jpg'} alt="" />
            </li>
            <li className="boximg proimg3">
              <img src={'./gallery/9.jpg'} alt="" />
            </li>
            <li className="boximg proimg3">
              <img src={'./gallery/10.jpg'} alt="" />
            </li>
            <li className="boximg proimg1">
              <img src={'./gallery/11.jpg'} alt="" />
            </li>
            <li className="boximg proimg2">
              <img src={'./gallery/12.jpg'} alt="" />
            </li>
            <li className="boximg proimg3">
              <img src={'./gallery/13.jpg'} alt="" />
            </li>
            <li className="boximg proimg3">
              <img src={'./gallery/14.jpg'} alt="" />
            </li>
            <li className="boximg proimg3">
              <img src={'./gallery/15.jpg'} alt="" />
            </li>
            <li className="boximg proimg3">
              <img src={'./gallery/16.jpg'} alt="" />
            </li>
            <li className="boximg proimg1">
              <img src={'./gallery/17.jpg'} alt="" />
            </li>
            <li className="boximg proimg2">
              <img src={'./gallery/18.jpg'} alt="" />
            </li>
            <li className="boximg proimg3">
              <img src={'./gallery/19.jpg'} alt="" />
            </li>
            <li className="boximg proimg3">
              <img src={'./gallery/20.jpg'} alt="" />
            </li>
            <li className="boximg proimg3">
              <img src={'./gallery/21.jpg'} alt="" />
            </li>
          </div>
        }
        {(wsdata === 'softwares') &&
          <div className="soft-cont">
            <ul>
              <li>
                <img src={'./documents/gitkraken.png'} alt="GitKraken" />
                <label>GitKraken</label></li>
              <li>
                <img src={'./documents/postman.png'} alt="postman" />
                <label>PostMan</label></li>
              <li>
                <img src={'./documents/mongodbcompass.png'} alt="mongodbcompass" />
                <label>MongoDB Compass</label></li>
              <li>
                <img src={'./documents/studio3t.jpeg'} alt="studio3t" />
                <label>Studio 3T</label></li>
              <li>
                <img src={'./documents/mxlinux.png'} alt="" />
                <label>MX Linux</label></li>
              <li>
                <img src={'./documents/wordpress.png'} alt="" />
                <label>WordPress</label></li>
              <li>
                <img src={'./documents/vscode.png'} alt="" />
                <label>VS Code</label></li>
              <li>
                <img src={'./documents/mspowerpoint.png'} alt="" />
                <label>MS PowerPoint (expert)</label></li>
              <li>
                <img src={'./documents/kdenlive.png'} alt="" />
                <label>Kdenlive</label></li>
              <li>
                <img src={'./documents/github.png'} alt="" />
                <label>GitHub</label></li>
              <li>
                <img src={'./documents/filmora.png'} alt="" />
                <label>Filmora</label></li>
              <li>
                <img src={'./documents/canva.png'} alt="" />
                <label>Canva</label></li>
              <li>
                <img src={'./documents/aws.png'} alt="" />
                <label>AWS</label></li>
              <li>
                <img src={'./documents/atom.png'} alt="" />
                <label>Atom</label></li>
            </ul>
          </div>
        }
      </div >

    )
  }
}

export default (Miscellaneous)
