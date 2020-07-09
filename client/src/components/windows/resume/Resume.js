import React from 'react';
import './resume.css';

export default (props) => (
    <div id="terminal-inner">
      <div className="resum-dwnl-conn">
          <ul>
            <li><div className="rdc-inn rdcipdf">
              <a download="portfolio CV.pdf" href="./documents" target="_blank" rel="noopener noreferrer"  >
                <img src={require('../../../assets/graphics/pdf logo.png')} alt=""/></a>
              </div></li>
            <li><div className="rdc-inn rdcidoc">
              <a download="portfolio CV.docx" href="./documents" target="_blank" rel="noopener noreferrer" >
                <img src={require('../../../assets/graphics/doc logo.png')} alt="" /></a>
              </div></li>
            <li><div className="rdc-inn rdcipng">
              <a download="portfolio CV.png" href="./documents" target="_blank" rel="noopener noreferrer" >
                <img src={require('../../../assets/graphics/png logo.png')} alt="" /></a>
              </div></li>
          </ul>
      </div>
      <div className="resume-conn" id="resum-conn">
        <img className="resu-img-cls" src={require('./documents/portfolio CV.png')} alt="" />
      </div>
    </div>
);