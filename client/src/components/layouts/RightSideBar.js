import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles';
import $ from 'jquery'
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import PauseIcon from '@material-ui/icons/Pause';
import SkipNextIcon from '@material-ui/icons/SkipNext';

import './rightsidebar.css'


const styles = theme => ({
  playerroot: {
    display: 'flex',
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
  },
  content: {
    flex: '1 0 auto',
    left: 0
  },
  cover: {
    position: 'absolute',
    width: 110,
    height: 110,
    top: 50,
    borderRadius: 10,
    right: 0
  },
  controls: {
    display: 'flex',
    alignItems: 'center',
    paddingLeft: theme.spacing(1),
    paddingBottom: theme.spacing(1),
  },
  playIcon: {
    height: 38,
    width: 38,
  },
})

$(document).ready(function () {
  var rnbid = $("#rnavbar");
  $(".bckimg").click(function () {
    var tempbdimg = $(this).prop('className').toString();
    var bcimgno = tempbdimg.substring(tempbdimg.length - 2, tempbdimg.length);
    var bckimgattr = $(".bdimag" + bcimgno).attr('src');
    $("#mac-bc-img").attr('src', bckimgattr);
  });
  $("#mac-bg-image").click(function () {
    rnbid.animate({ width: "0%" });
  });

  $("#ryt-menu-nav").click(function () {
    var rnbidper = parseInt(rnbid.css("width"));
    var t = Math.ceil(rnbidper);
    if (t <= 0) {
      rnbid.animate({ width: "17%" });
    }
    else {
      rnbid.animate({ width: "0%" });
    }
  });
});


class RightSideBar extends Component {
  constructor(props) {
    super(props)
    this.state = {
      playSong: false
    }
  }
  openWindow(otherdata, wtype, wdata, wname) {
    this.props.dataExchange({
      waction: 'openWindow',
      otherdata: otherdata,
      wtype: wtype,
      wdata: wdata,
      wname: wname
    })
  }
  render() {
    const { classes } = this.props

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
          <div className="rnbcon rnbc02">
            <div id="rnbcb-name" className="rnbcb-name">
              <span>Visitor's Count</span>
            </div>
            <div className="rnb-vc">
              <a className="hitCounter" href="https://kartiktyagi.me/" target="_blank" rel="noopener noreferrer">
                <img src="https://www.webfreecounter.com/hit.php?id=geuxfkkn&nd=6&style=12" border="0" alt="web counter" />
              </a>
            </div>
          </div>
          <div className="rnbcon rnbc03">
            <Button variant="contained" className="open-feedback"
              onClick={this.openWindow.bind(this, { wSubType: 'other', wsData: null }, 'Explorer', 'Feedback', "Feedback")}
              size="large">Feedbacks</Button>
          </div>

          <div className="rnbcon rnbc04">
            <Card className={classes.playerroot}>
              <audio id="player" src={'./assets/Senorita.mp3'}></audio>
              <div className={classes.details}>
                <CardContent className={classes.content}>
                  <Typography component="h6" variant="h6" className="song-name">
                    Senorita
          </Typography>
                  <Typography variant="subtitle1" color="textSecondary">
                    Shawn Mendes
          </Typography>
                </CardContent>
                <div className={classes.controls}>
                  <IconButton aria-label="previous" onClick={() => {
                    this.setState({ playSong: !this.state.playSong });
                    (this.state.playSong) ?
                      document.getElementById('player').play() :
                      document.getElementById('player').pause()
                  }}>
                    <SkipPreviousIcon />
                  </IconButton>
                  <IconButton aria-label="play/pause" onClick={() => {
                    this.setState({ playSong: !this.state.playSong });
                    (this.state.playSong) ?
                      document.getElementById('player').play() :
                      document.getElementById('player').pause()
                  }}>{
                      (this.state.playSong) ?
                        <PlayArrowIcon className={classes.playIcon} /> :
                        <PauseIcon className={classes.playIcon} />
                    }
                  </IconButton>
                  <IconButton aria-label="next" onClick={() => {
                    this.setState({ playSong: !this.state.playSong });
                    (this.state.playSong) ?
                      document.getElementById('player').play() :
                      document.getElementById('player').pause()
                  }}>
                    <SkipNextIcon />
                  </IconButton>
                </div>
              </div>
              <CardMedia
                className={classes.cover}
                image="./gallery/21.jpg"
                title=""
              />
            </Card>
          </div>

          <div className="rnbcon rnbc05">
            <div id="rnbcb-name" className="rnbcb-name">
              <span>Note</span>
            </div>
            <div className="rnb-note">
              <div className="note-cont">
                <p>
                  I initiated this project as Personal Porfolio website.<br/>
                  But it is much more than that. The Vision behind this project is to
                  create a futuristic OS which will be entirely based on Cloud.<br/>
                  If possible, It'll helpful to work using AR/VR. This will help to get rid of carrying
                  bulky hardware devices and their costs. The used cases of this project are boundless.

                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default (withStyles(styles, { withTheme: true }))(RightSideBar)