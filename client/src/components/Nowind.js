import React from 'react';

const nowWind = {
    position: 'absolute',
    width: 200+"px",
    height: 100+"px",
    background: 'red',
    top: 50+'%',
    left: 50+'%',
    zIndex: 10000
}

class Nowind extends React.Component {
    state = {
        testing: 'Text Changed'
    }
    onChangeTesting() {
        this.props.changeTest(this.state.testing)
    }
    render(){
        return (
            <div  style={nowWind}>
            <h1>{this.props.text}</h1>
            <button onClick={this.onChangeTesting.bind(this)}>Change Text</button>
            </div>
        )
    }
}

export default Nowind