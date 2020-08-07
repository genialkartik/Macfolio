import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const styles = (theme) => ({
  root: {
    maxWidth: '100%',
    margin: '20px 50px'
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
})



class Thinkbin extends Component {
  constructor(props) {
    super(props)
    this.state = {
      expanded: false,
      thoughts: [
        { id: 0, expand: false, shortQ: 'aasdf', expandedQ: 'kljlkjl', dateCreated: 'September 14, 2016' },
        { id: 1, expand: false, shortQ: 'aagfdsdf', expandedQ: 'kzzzzzzljxvxzlkjl', dateCreated: 'September 14, 2016' },
        { id: 2, expand: false, shortQ: 'aasdddasddf', expandedQ: 'kacccccsfdljlkjl', dateCreated: 'September 14, 2016' },
        { id: 3, expand: false, shortQ: 'aasrshhhhhtdf', expandedQ: 'klaaaaajlkjl', dateCreated: 'September 14, 2016' },
      ]
    }
  }

  handleExpandClick = (id) => {
    let copyThoughts = [...this.state.thoughts]
    copyThoughts.splice(id, 1, {
      id: id, expand: !this.state.thoughts[id].expand,
      shortQ: this.state.thoughts[id].shortQ,
      expandedQ: this.state.thoughts[id].expandedQ,
      dateCreated: this.state.thoughts[id].dateCreated
    })
    this.setState({
      thoughts: copyThoughts
    })
  }

  render() {
    const { classes } = this.props

    return (
      <div>
        {
          this.state.thoughts.map(({ id, expand, shortQ, expandedQ, dateCreated }) => (
            <Card className={classes.root}>
              <CardContent>
                <Typography variant="body2" color="textSecondary" component="p" className="smallquote">

                  {shortQ}

                  <IconButton
                    className={clsx(classes.expand, {
                      [classes.expandOpen]: expand,
                    })}
                    onClick={this.handleExpandClick.bind(this, id)}
                    aria-expanded={expand}
                    aria-label="show more"
                  >
                    <ExpandMoreIcon />
                  </IconButton>
                </Typography>
              </CardContent>
              <Collapse in={expand} timeout="auto" unmountOnExit>
                <CardContent>
                  <Typography paragraph className="detailedquote">

                    {expandedQ}

                  </Typography>
                </CardContent>
              </Collapse>
              <CardHeader
                avatar={
                  <IconButton aria-label="add to favorites" >
                    <FavoriteIcon />
                  </IconButton>
                }
                subheader={dateCreated}
              />
            </Card>
          ))
        }
      </div>
    )
  }
}

export default withStyles(styles, { withTheme: true })(Thinkbin)