import React, { Component } from 'react';
import axios from 'axios';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

import PropTypes from 'prop-types';
import SentimentVeryDissatisfiedIcon from '@material-ui/icons/SentimentVeryDissatisfied';
import SentimentDissatisfiedIcon from '@material-ui/icons/SentimentDissatisfied';
import SentimentSatisfiedIcon from '@material-ui/icons/SentimentSatisfied';
import SentimentSatisfiedAltIcon from '@material-ui/icons/SentimentSatisfiedAltOutlined';
import SentimentVerySatisfiedIcon from '@material-ui/icons/SentimentVerySatisfied';
import Rating from '@material-ui/lab/Rating';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import TextField from '@material-ui/core/TextField';
import CardMedia from '@material-ui/core/CardMedia';
import './feedback.css'

let month = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
const customIcons = {
  1: {
    icon: <SentimentVeryDissatisfiedIcon />,
    label: 'Very Dissatisfied',
  },
  2: {
    icon: <SentimentDissatisfiedIcon />,
    label: 'Dissatisfied',
  },
  3: {
    icon: <SentimentSatisfiedIcon />,
    label: 'Neutral',
  },
  4: {
    icon: <SentimentSatisfiedAltIcon />,
    label: 'Satisfied',
  },
  5: {
    icon: <SentimentVerySatisfiedIcon />,
    label: 'Very Satisfied',
  },
};
function IconContainer(props) {
  const { value, ...other } = props;
  return <span {...other}>{customIcons[value].icon}</span>;
}

IconContainer.propTypes = {
  value: PropTypes.number.isRequired,
};

// feedback form
const styles = (theme) => ({
  root: {
    maxWidth: 400,
    minWidth: 400,
    margin: 20,
    background: '#626262',
    color: '#fff',
    float: 'left'
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
  iconFilled: {
    color: '#fff',
  },
  iconHover: {
    color: '#aaa',
  },
})

class Feedback extends Component {
  constructor(props) {
    super(props)
    this.state = {
      openFeedbackForm: false,
      expanded: false,
      feedback: [],
      // feedback form
      feederName: null,
      feederImage: null,
      feederMessage: null,
      feederStar: null,
    }
  }

  componentDidMount() {
    axios.get('/feedback/show')
      .then(res => {
        this.setState({
          feedback: res.data
        })
      })
  }

  handleExpandClick = () => {
    this.setState({
      expanded: !this.state.expanded
    })
  };

  sendFeedback = e => {
    e.preventDefault();
    let formData = new FormData();
    formData.append('name', this.state.feederName)
    formData.append('message', this.state.feederMessage)
    formData.append('star', this.state.feederStar)
    formData.append('image', this.state.feederImage)
    axios.post(`/feedback/show`, formData)
      .then(res => {
        this.setState({
          feedback: [...this.state.feedback, res.data]
        })
      })
    this.setState({ openFeedbackForm: false })
  }

  feedbackDetail = e => {
    let nam = e.target.name;
    let val = e.target.value;
    this.setState({ [nam]: val });
  }
  fileUpload = e => {
    this.setState({
      feederImage: e.target.files[0]
    })
  }

  render() {
    const { classes } = this.props
    return (
      <div>
        <Button variant="contained" className="feedback-button"
          onClick={() => { this.setState({ openFeedbackForm: !this.state.openFeedbackForm }) }}
          size="large" color="primary">Give Feedback</Button>

        {(this.state.openFeedbackForm === true) &&
          <div className="feedback-form">
            <form className="form-detail" onSubmit={this.sendFeedback.bind(this)} encType="mulitpart/form-data">
              <h3>Thanks for enlightening me with your valuable feedback!</h3><br />
              <TextField id="basic1" label="Your Name" variant="outlined" name="feederName"
                onChange={this.feedbackDetail.bind(this)} required /><br /><br />
              <TextField id="basic3" type="number" label="Rating (1-5)" variant="outlined" name="feederStar"
                onChange={this.feedbackDetail.bind(this)} required /><br /><br />
              <p>Upload any memory together or just upload your Avatar (image)!</p><br />
              <input type="file" id="feederImage" onChange={this.fileUpload.bind(this)} required /><br /><br />
              <TextField id="basic4" label="Message" multiline rows={5} columns={8} name="feederMessage"
                onChange={this.feedbackDetail.bind(this)} required /><br /><br />
              <Button variant="contained" type="submit" size="medium" color="primary">Submit</Button>
            </form>
          </div>
        }
        {(this.state.openFeedbackForm === false) &&
          <div>
            {(this.state.feedback) &&
              this.state.feedback.map(({ _id, Name, ImageName, Message, Star, date }) => (
                <Card className={classes.root} key={_id}>
                  <CardHeader
                    avatar={
                      <Avatar aria-label="recipe" className={classes.avatar}>{Name.substring(0, 1)}</Avatar>
                    }
                    title={Name}
                    subheader={month[Number(date.substring(5, 7)) - 1] + ' ' + date.substring(8, 10) + " " + date.substring(0, 4)}
                    action={<Rating
                      name="customized-icons"
                      defaultValue={Star}
                      style={{ top: 15 }}
                      IconContainerComponent={IconContainer}
                    />}
                  />
                  <CardMedia
                    className={classes.media}
                    image={ImageName}
                    title="Thank Buddy"
                  />
                  <CardContent>
                    <Typography variant="body2" color="textSecondary" component="div" style={{ color: '#fff' }}>
                      {(this.state.expanded) ?
                        <Collapse in={this.state.expanded} timeout="auto" unmountOnExit>
                          {Message}
                        </Collapse> :
                        <div>{Message.substring(0, 50)}...</div>
                      }
                      <ExpandMoreIcon
                        className={clsx(classes.expand, {
                          [classes.expandOpen]: this.state.expanded,
                        })}
                        onClick={this.handleExpandClick.bind(this)}
                        aria-expanded={this.state.expanded}
                        aria-label="show more" />
                    </Typography>
                  </CardContent>
                </Card>
              ))
            }
          </div>
        }
      </div>
    )
  }
}

export default withStyles(styles, { withTheme: true })(Feedback)