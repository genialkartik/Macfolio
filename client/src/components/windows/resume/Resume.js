import React from 'react';
import { PDFReader } from 'reactjs-pdf-reader';
import './resume.css';

export default (props) => (
    <div id="terminal-inner">
      <div className="resum-dwnl-conn">
          <ul>
            <li><div className="rdc-inn rdcipdf">
              <a download="portfolioCV.pdf" href="./documents" target="_blank" rel="noopener noreferrer"  >
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
        <PDFReader url={'./documents/portfolioCV.pdf'} showAllPage="true" />
      </div>
    </div>
);