import React, {Component} from 'react'
import $ from 'jquery'
import './rightsidebar.css'



$(document).ready(function(){
    var rnbid = $("#rnavbar");
    $(".bckimg").click(function(){
        var tempbdimg = $(this).prop('className').toString();
        var bcimgno = tempbdimg.substring(tempbdimg.length-2,tempbdimg.length);
        var bckimgattr = $(".bdimag"+bcimgno).attr('src');
        $("#mac-bc-img").attr('src',bckimgattr);
    });
    $("#mac-bg-image").click(function(){
        rnbid.animate({ width: "0%"});
    });

    $("#ryt-menu-nav").click(function(){
        var rnbidper = parseInt(rnbid.css("width"));
        var t = Math.ceil(rnbidper);
    if(t<=0)
    {
        rnbid.animate({ width: "17%"});
    }
    else {
        rnbid.animate({ width: "0%"});
    }
    });
});


class RightSideBar extends Component {
    render(){
        return (
            <div className="ryt-nav-bar" id="rnavbar">
                <div className="rnb-container">
                    <div className="rnbcon rnbc01">
                        <div id="rnbcb-name" className="rnbcb-name">
                            <span>Background Image</span>
                        </div>
                        <div className="rnb-chs-bdimg">
                            <div id="rnbcb-imgs" className="rnbcb-imgs">
                                <ul>
                                    <li><img className="bckimg bdimag01" src={require('../../assets/mac wallpapers/ab.jpg')} alt="" /> </li>
                                    <li><img className="bckimg bdimag02" src={require('../../assets/mac wallpapers/aba.jpg')} alt="" /> </li>
                                    <li><img className="bckimg bdimag03" src={require('../../assets/mac wallpapers/adfa.jpg')} alt="" /> </li>
                                    <li><img className="bckimg bdimag04" src={require('../../assets/mac wallpapers/asda.jpg')} alt="" /> </li>
                                    <li><img className="bckimg bdimag05" src={require('../../assets/mac wallpapers/sa.jpg')} alt="" /> </li>
                                    <li><img className="bckimg bdimag06" src={require('../../assets/mac wallpapers/sd.jpg')} alt="" /> </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <br/>
                    <div className="rnbcon rnbc02">
                        <div id="rnbcb-name" className="rnbcb-name">
                            <span>Visitor's Count</span>
                        </div>
                        <div className="rnb-vc">
                            <a className="hitCounter" href="https://kartiktyagi.me/" target="_blank" rel="noopener noreferrer">
                                {/* <img src="https://www.webfreecounter.com/hit.php?id=geuxfkkn&nd=6&style=12" border="0" alt="web counter" /> */}
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default RightSideBar