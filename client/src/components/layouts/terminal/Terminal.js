import React from 'react'
import './terminal.css'
import * as windData from '../../windows/index'


class Terminal extends React.Component { 
    
    closeWindow(clsid){
        this.props.changeTest(clsid)
    }

    render(){
    const Wdata = windData[this.props.windItem]
    
    return (
        <div className="wind-con">
            <div id="wind-up-tab">
                <ul>
                    <li id="closetab">
                        <span className="wintab" onClick={this.closeWindow.bind(this, this.props.wid)}>x</span>
                    </li>
                    <li id="minimztab"><span  className="wintab">-</span></li>
                    <li id="tabsize"><span  className="wintab">&oslash;</span></li>
                    <li id="opnd-wind-icon-thumbnail" className="opndwintab"><img src={require('../../../assets/icons/help.png')} alt="Window" /></li>
                    <li className="opndwintab">{this.props.wid}</li>
                </ul>
            </div>
            
            <div id="wind-ter-conn">
                <Wdata />
            </div>
        </div>
    )}
}

export default Terminal;