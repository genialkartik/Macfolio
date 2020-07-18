import React, { Component } from 'react'
import FolderIcon from '@material-ui/icons/Folder';
import { withStyles } from "@material-ui/core/styles";
import $ from 'jquery'
import './academics.css'
 
const styles = theme => ({
  root: {
    backgroundColor: "red"
  },
  fileContainer: {
    position: 'absolute'
  },
  folder: {
    width: '170px',
    height: '200px',
    wordWrap: 'break-word',
    marginLeft: '10px',
    textAlign: 'center',
    float: 'left'
  },
  foldericon: {
    color: '#71CFFA',
    fontSize: '10em'
  }
});

class Academics extends Component {
  constructor(props) {
    super(props);
    this.state = {
    selectfolderName: 'none',
    isFolderSelected: false,
    folderitems: [
        { folderId: 0, folderName: 'Kartik'},
        { folderId: 1, folderName: 'Tyagi'},
        { folderId: 2, folderName: 'Developer'}
      ]
    };
    this.toggleContainer = React.createRef();

    this.onClickOutsideHandler = this.onClickOutsideHandler.bind(this);
  }

  componentDidMount() {    
    window.addEventListener('click', this.onClickOutsideHandler);  
  }
  componentWillUnmount() {
    window.removeEventListener('click', this.onClickOutsideHandler);
  }

  onSelectFolder(id) {
    $('#'+this.state.selectfolderName+'icon').toggleClass('foldericonselect')
    $('#'+this.state.selectfolderName+'name').toggleClass('foldernameselect')
    $('#'+id+'icon').toggleClass('foldericonselect')
    $('#'+id+'name').toggleClass('foldernameselect')

    this.setState({ isFolderSelected: true })
    this.setState({ selectfolderName: id })
  }

  onClickOutsideHandler(event) {    
    if (this.state.isFolderSelected && !this.toggleContainer.current.contains(event.target)) {
      $('#'+this.state.selectfolderName+'icon').toggleClass('foldericonselect')
      $('#'+this.state.selectfolderName+'name').toggleClass('foldernameselect')
      this.setState({ isFolderSelected: false })
      this.setState({ selectfolderName: 'none' })
    }
  }
  openFolder() {
    console.log('open folder')
  }
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root} key='folderkey'>
        <div className={classes.fileContainer} ref={this.toggleContainer}>
          <ul>
            { this.state.folderitems.map(({folderId, folderName}) => (
              <li key={folderId} 
                className={classes.folder} 
                onClick={this.onSelectFolder.bind(this, folderName)} 
                onDoubleClick={this.openFolder.bind(this)}>
              <div id={folderName+"icon"}>
              <FolderIcon className={classes.foldericon} /></div>
            <label id={folderName+"name"} className={ "foldername"}>{folderName}</label></li>
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

// export default Academics;

export default withStyles(styles, { withTheme: true })(Academics);
