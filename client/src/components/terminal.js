import React from 'react'
import './terminal.css'


class TerminalLayout extends React.Component {
    render() {
        return (
            <div>
                <div className="wind-con">
                    <div id="wind-up-tab">
                        {/* <span id="closetab" className="closetab clstb01"><img src="/images/graphics/close.png" alt="" /></span>
                        <span id="minimztab" className="minimztab mmt01"><img src="/images/graphics/minimz.png" alt="" /></span>
                        <span id="tabsize" className="tabsize tbsz01"><img src="/images/graphics/tabsz.png" alt="" /></span> */}
                        <ul>
                            <li id="closetab"><span className="wintab">x</span></li>
                            <li id="minimztab"><span  className="wintab">-</span></li>
                            <li id="tabsize"><span  className="wintab">&oslash;</span></li>
                            <li id="opnd-wind-icon-thumbnail" className="opndwintab"><img src={require('../assets/icons/help.png')} alt="Window" /></li>
                            <li className="opndwintab">About</li>
                        </ul>
                    </div>
                    
                    <div id="wind-ter-conn">
                        
                    </div>
                </div>
            </div>
        )
    }
}

export default TerminalLayout