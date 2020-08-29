import React, { Component } from 'react'
import axios from 'axios'

import './contact.css'

export default class Contact extends Component {
  constructor(props) {
    super(props)
    this.state = {
      cname: '', cemail: '',
      csubject: '', cmessage: ''
    }
  }
  sentMail = e => {
    e.preventDefault();
    let formData = new FormData();
    formData.append('cname', this.state.cname)
    formData.append('cemail', this.state.cemail)
    formData.append('csubject', this.state.csubject)
    formData.append('cmessage', this.state.cmessage)
    axios.post(`/contact`, formData)
      .then(res => {
        alert(res.data)
      })
  }
  cdetail = e => {
    let nam = e.target.name;
    let val = e.target.value;
    this.setState({ [nam]: val });
  }

  render() {
    console.log(this.props)
    return (
      <div className="page-content">
        <div className="form-v4-content">
          <div className="form-left">
            <img src="https://media.giphy.com/media/PiQejEf31116URju4V/giphy.gif" alt="Coder GIF" width="500" height="400" />            
          </div>
            <form className="form-detail" onSubmit={this.sentMail.bind(this)} method="post" id="myform">
              <h2>Thanks for writting in!</h2>
              <div className="form-group">
                <div className="form-row form-row-1">
                  <label >Your Name</label>
                  <input type="text" name="cname" id="first_name" className="input-text" onChange={this.cdetail.bind(this)} required />
                </div>
              </div>
              <div className="form-row">
                <label>Your Email</label>
                <input type="text" name="cemail" id="useremail" className="input-text" onChange={this.cdetail.bind(this)} required pattern="[^@]+@[^@]+.[a-zA-Z]{2,6}" />
              </div>
              <div className="form-row">
                <label>Subject</label>
                <input type="text" name="csubject" id="csubject" className="input-text" onChange={this.cdetail.bind(this)} required />
              </div>
              <div className="form-group">
                <div className="form-row form-row-1 ">
                  <label>Message</label>
                  <textarea rows="3" cols="40" name="cmessage" onChange={this.cdetail.bind(this)} required ></textarea>
                </div>
              </div>
              <div className="form-row-last">
                <input type="submit" name="submit" className="register" value="Send" />
              </div>
            </form>
          </div>
        </div>
    )
  }
}
