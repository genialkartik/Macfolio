import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles';

import DevDotTo from 'react-devdotto'
import { TwitterTimelineEmbed, TwitterFollowButton } from 'react-twitter-embed';
import InstagramEmbed from 'react-instagram-embed';
import { Github } from 'react-social-github';
import { StackOverflowProfile } from "react-stackoverflow-card";
import "react-stackoverflow-card/dist/index.css";

import FavoriteIcon from '@material-ui/icons/Favorite';

import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import ShareIcon from '@material-ui/icons/Share';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import './connect.css'

const styles = theme => ({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  avatar: {
    backgroundColor: 'red',
  },
})

class Connect extends Component {

  render() {
    const wsdata = this.props.wsData
    const { classes } = this.props

    return (
      <div className="social-container">
        {(wsdata === 'connect') &&
          <Card className={classes.root}>
            <CardHeader
              avatar={
                <Avatar aria-label="recipe" className={classes.avatar}>
                  R
            </Avatar>
              }
              action={
                <IconButton aria-label="settings">
                  <MoreVertIcon />
                </IconButton>
              }
              title="Shrimp and Chorizo Paella"
              subheader="September 14, 2016"
            />
            <CardMedia
              className={classes.media}
              image={'wallpaper1.jpg'}
              title="Paella dish"
            />
            <CardContent>
              <Typography variant="body2" color="textSecondary" component="p">
                This impressive paella is a perfect party dish and a fun meal to cook together with your
                guests. Add 1 cup of frozen peas along with the mussels, if you like.
          </Typography>
            </CardContent>
            <CardActions disableSpacing>
              <IconButton aria-label="add to favorites">
                <FavoriteIcon />
              </IconButton>
              <IconButton aria-label="share">
                <ShareIcon />
              </IconButton>
            </CardActions>
          </Card>
        }
        {(wsdata === 'twitter') &&
          <div className="embed-container">
            <TwitterFollowButton
              screenName={'genialkartik'}
            />
            <TwitterTimelineEmbed
              sourceType="profile"
              screenName="genialkartik"
              options={{ width: '500px' }}
            />
          </div>
        }
        {(wsdata === 'githubprofile') &&
          <div className="githubsocial-container">
            <div className="githubprofile-card">
              <Github user="genialkartik" type="tooltip" tooltipOnHover={true} fab={true} fabCorner="bottom-left" iconColor="#888"></Github>
            </div>
            <br />
            <br />
            <ul>
              <li><Github user="genialkartik" repo="100daysofcode" type="widget"></Github></li>
              <li><Github user="genialkartik" repo="macfolio" type="widget"></Github></li>
              <li><Github user="genialkartik" repo="react-devdotto" type="widget"></Github></li>
              <li><Github user="genialkartik" repo="Blog-Socketio" type="widget"></Github></li>
              <li><Github user="genialkartik" repo="FileStream-handling" type="widget"></Github></li>
              <li><Github user="genialkartik" repo="Traflow" type="widget"></Github></li>
              <li><Github user="genialkartik" repo="genialkartik.github.io" type="widget"></Github></li>
              <li><Github user="genialkartik" repo="Phishing-Detector" type="widget"></Github></li>
            </ul>
          </div>
        }
        {(wsdata === 'instagram') &&
          <div className="embed-container">
            <InstagramEmbed
              url='https://www.instagram.com/p/B8KGszlHPf-/'
              maxWidth={500}
              hideCaption={false}
            /><br /><br />
            <InstagramEmbed
              url='https://www.instagram.com/p/B_FzKjwHaIy/'
              maxWidth={500}
              hideCaption={false}
            /><br /><br />
            <InstagramEmbed
              url='https://www.instagram.com/p/B-YUv-LnVfP/'
              maxWidth={500}
              hideCaption={false}
            /><br /><br />
            <InstagramEmbed
              url='https://www.instagram.com/p/B8R73abHLSK/'
              maxWidth={500}
              hideCaption={false}
            /><br /><br />
          </div>
        }
        {(wsdata === 'stackoverflow') &&
          <div className="embed-container">
            <br /><br />
            <div style={{ scale: '2', transform: 'translate(25%,20%' }}>
              <StackOverflowProfile
                id="11130033"
                containerStyle={{
                  backgroundColor: "rgba(49, 49, 49)"
                }}
              />
            </div>
          </div>
        }
        {(wsdata === 'devtoblogs') &&
          <div className="devto-container">
            <DevDotTo username="genialkartik" />
          </div>
        }
      </div >
    )
  }
}

export default (withStyles(styles, { withTheme: true }))(Connect)
