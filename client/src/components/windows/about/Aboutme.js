import React from 'react';
import './aboutme.css';

export default (props) => (
  <div id="aboutme-conn">
  <div className="aboutme">
    <div id="about-left">
      <div className="aboutimg">
        <div id="ab-myimage">
          <img src={require('../../../assets/kartik tyagi images/myimage.jpg')} alt="kartik Tyagi" />
        </div>
      </div>
      <div className="about-link">
        <div className="lin-conta">
          <div className="sociallinks">
            <a href="https://www.facebook.com/genialkartik" target="_blank" rel="noopener noreferrer">
              <img src={require('../../../assets/graphics/facebook.png')} alt="" />
            </a>
            <a href="https://www.instagram.com/genialkartik/" target="_blank" rel="noopener noreferrer">
              <img src={require('../../../assets/graphics/insta.png')} alt="" />
            </a>
            <a href="https://www.linkedin.com/in/kartik-tyagi-749075190/" target="_blank" rel="noopener noreferrer">
              <img src={require('../../../assets/graphics/linkedin.png')} alt="" />
            </a>
            <a href="https://twitter.com/genialkartik" target="_blank" rel="noopener noreferrer">
              <img src={require('../../../assets/graphics/twitter.png')} alt="" />
            </a>
          </div>
        </div>
      </div>
    </div>
    <div id="about-right">
      <div className="name">
        <span><b>Kartik Tyagi</b></span>
          <br />
          <span id="name-hin">कार्तिक त्यागी</span>
      </div>
      <div className="lineaboutme">
        <p>Hi, This is me, Kartik Tyagi, a super simple Backend Web Developer who believe 
          in knowledge sharing & its expansion, grow together, Love and Karma. 
          Working open-handedly to ameliorate society, Environment, and culture.<br /><br /> 
          I'm an ambivert kind of person, who loves to work in piece and sharing things with 
          like minded people. If you want to work with me and in case you've something to offer, 
          feel free to reach me out anytime! I would love to work and connect with you.
          <br/><br/>
          Kindly, drop an <a href="mailto:kartik9756@gmail.com"
          style={{color: '#2E9AFE', textDecoration: 'none'}}>Email</a> in case of any query.
          <br/><br/><br/>
          <span style={{position: "absolute",left: "-40%", color: "white", fontStyle: "italic" }}>Life is short, try to make it simple as well</span>

        </p>
      </div>
    </div>
  </div>
</div>
);