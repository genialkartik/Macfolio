import React from 'react'
import './terminal.css'
import * as windData from '../../windows/index'


const Terminal = (props) => { 
    const Wdata = windData[props.windItem]

    return (
        <div>
            <div className="wind-con">
                <div id="wind-up-tab">
                    <ul>
                        <li id="closetab"><span className="wintab">x</span></li>
                        <li id="minimztab"><span  className="wintab">-</span></li>
                        <li id="tabsize"><span  className="wintab">&oslash;</span></li>
                        <li id="opnd-wind-icon-thumbnail" className="opndwintab"><img src={require('../../../assets/icons/help.png')} alt="Window" /></li>
                        <li className="opndwintab">{props.windItem}</li>
                    </ul>
                </div>
                
                <div id="wind-ter-conn">
                    <Wdata />
                </div>
            </div>
        </div>
    )
}

export default Terminal;