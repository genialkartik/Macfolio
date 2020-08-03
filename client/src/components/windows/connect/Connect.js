import React, { Component } from 'react'
import {withStyles} from '@material-ui/core/styles';

import { TwitterTimelineEmbed, TwitterFollowButton } from 'react-twitter-embed';
import InstagramEmbed from 'react-instagram-embed';
import { Github } from 'react-social-github';
import { StackOverflowProfile } from "react-stackoverflow-card";
import "react-stackoverflow-card/dist/index.css";

import FavoriteIcon from '@material-ui/icons/Favorite';
import LinkIcon from '@material-ui/icons/Link';

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

  constructor(props) {
    super(props)
    this.state = {
      articles: [],
    }
  }
  callApi = (username = 'genialkartik') => {
    fetch(`https://dev.to/api/articles?username=${username}`)
      .then((result) => {
        // Get the result
        // If we want text, call result.text()
        return result.json();
      }).then((jsonResult) => {
        // Do something with the result
        this.setState({ articles: jsonResult })
      })
  }

  componentDidMount() {
    this.callApi(this.props.username);
  }

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
        { // (wsdata === 'linkedin') &&
          // <div>
          //  <div className="LI-profile-badge"  data-version="v1" data-size="medium" data-locale="en_US" data-type="vertical" data-theme="dark" data-vanity="genial-kartik">
          //    <a className="LI-simple-link" href='https://in.linkedin.com/in/genial-kartik?trk=profile-badge'>Kartik Tyagi</a></div>
          // </div>
        }
        {(wsdata === 'githubprofile') &&
          <div className="githubsocial-container">
            <div className="githubprofile-card">
              <Github user="genialkartik" type="tooltip" tooltipOnHover={true} fab={true} fabCorner="bottom-left" iconColor="#888"></Github>
            </div>
            <br />
            <br />
            <ul>
              <li><Github user="genialkartik" repo="macfolio" type="widget"></Github></li>
              <li><Github user="genialkartik" repo="macfolio" type="widget"></Github></li>
              <li><Github user="genialkartik" repo="macfolio" type="widget"></Github></li>
              <li><Github user="genialkartik" repo="macfolio" type="widget"></Github></li>
              <li><Github user="genialkartik" repo="macfolio" type="widget"></Github></li>
              <li><Github user="genialkartik" repo="macfolio" type="widget"></Github></li>
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
          <div className="mediumpro-container">
            <div>
              <div className="devcontainer">
                {this.state.articles.map(
                  item =>
                      <div className="item" key={item.id}>
                        <h1 className="heading"><strong>{item.title}</strong></h1>
                        {item.cover_image ?
                          <img className="devblogimg" src={item.cover_image} alt="dev.to" /> :
                          <div className="description">
                            <h3>{item.description}</h3>
                          </div>
                        }
                        <p>{
                            item.tag_list.map((tag)=>{
                              return "  #"+tag
                            })
                          }</p><br/>
                        <div className="icons">
                          <p><FavoriteIcon />{item.positive_reactions_count+100}</p>
                          <a href={item.canonical_url} className="open"><p><LinkIcon /></p></a>
                        </div>
                      </div>
                )}
              </div>
            </div>
          </div>
        }
      </div >

    )
  }
}

export default (withStyles(styles, {withTheme: true}))(Connect)
