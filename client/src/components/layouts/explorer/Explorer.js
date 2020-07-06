import React from 'react'
import '../teminal/terminal.css'


export default (props) => (
    <div>
        <div className="wind-con">
            <div id="wind-up-tab">
                <ul>
                    <li id="closetab"><span className="wintab">x</span></li>
                    <li id="minimztab"><span  className="wintab">-</span></li>
                    <li id="tabsize"><span  className="wintab">&oslash;</span></li>
                    <li id="opnd-wind-icon-thumbnail" className="opndwintab"><img src={require('../../../assets/icons/help.png')} alt="Window" /></li>
                    <li className="opndwintab">Explorer</li>
                </ul>
            </div>
            
            <div id="wind-ter-conn">
            </div>
        </div>
    </div>
);
