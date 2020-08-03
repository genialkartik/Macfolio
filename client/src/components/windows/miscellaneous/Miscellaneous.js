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
              <img src={require('../../../assets/gallery/1.jpg')} alt="" />
            </li>
            <li className="boximg proimg2">
              <img src={require('../../../assets/gallery/2.jpg')} alt="" />
            </li>
            <li className="boximg proimg3">
              <img src={require('../../../assets/gallery/3.jpg')} alt="" />
            </li>
            <li className="boximg proimg3">
              <img src={require('../../../assets/gallery/3.jpg')} alt="" />
            </li>
            <li className="boximg proimg3">
              <img src={require('../../../assets/gallery/3.jpg')} alt="" />
            </li>
          </div>
        }
      </div >

    )
  }
}

export default (Miscellaneous)
