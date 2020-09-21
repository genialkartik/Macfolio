import React, { Component } from 'react'
import CircularProgress from '@material-ui/core/CircularProgress'
import './languages.css'

export default class Skills extends Component {
    render() {
        return (
            <div id="test1">
                <ul>
                    <li><CircularProgress variant="static" style={{color: '#F15930'}} value={80} />
                        <img src={require('../../../assets/graphics/html.png')} alt="" /></li>
                    <li><CircularProgress variant="static" style={{color: ' #127BC0 '}} value={90} />
                        <img src={require('../../../assets/graphics/css.png')} alt="" /></li>
                    <li><CircularProgress variant="static" style={{color: ' #F58231 '}} value={60} />
                        <img src={require('../../../assets/graphics/js.png')} alt="" /></li>
                    <li><CircularProgress variant="static" style={{color: ' #377EF0 '}} value={30} />
                        <img src={require('../../../assets/graphics/python.png')} alt="" /></li>
                    <li><CircularProgress variant="static" style={{color: ' #193556 '}} value={50} />
                        <img src={require('../../../assets/graphics/jquery.png')} alt="" /></li>
                    <li><CircularProgress variant="static" style={{color: ' #DD1B16 '}} value={10} />
                        <img src={require('../../../assets/graphics/angular.png')} alt="" /></li>
                    <li><CircularProgress variant="static" style={{color: ' green '}} value={70} />
                        <img src={require('../../../assets/graphics/php.png')} alt="" /></li>
                    <li><CircularProgress variant="static" style={{color: ' #1086A2 '}} value={70} />
                        <img src={require('../../../assets/graphics/json.png')} alt="" /></li>
                    <li><CircularProgress variant="static" style={{color: ' #00599D '}} value={60} />
                        <img src={require('../../../assets/graphics/cpp.png')} alt="" /></li>
                    <li><CircularProgress variant="static" style={{color: '#89BD5D'}} value={70} />
                        <img src={require('../../../assets/graphics/nodejs.png')} alt="" /></li>
                    <li><CircularProgress variant="static" style={{color: '#55AC4E'}} value={90} />
                        <img src={require('../../../assets/graphics/mongodb.png')} alt="" /></li>
                    <li><CircularProgress variant="static" style={{color: '#60B3D7'}} value={70} />
                        <img src={require('../../../assets/graphics/wordpress.png')} alt="" /></li>
                    <li><CircularProgress variant="static" style={{color: 'white'}} value={90} />
                        <img src={require('../../../assets/graphics/jsx.png')} alt="" /></li>
                    <li><CircularProgress variant="static" style={{color: '#00D7FD'}} value={70} />
                        <img src={require('../../../assets/graphics/react.png')} alt="" /></li>
                    <li><CircularProgress variant="static" style={{color: '#EE4F32'}} value={70} />
                        <img src={require('../../../assets/graphics/git.png')} alt="" /></li>
                    <li><CircularProgress variant="static" style={{color: '#4594CC'}} value={70} />
                        <img src={require('../../../assets/graphics/ajax.png')} alt="" /></li>
                    <li><CircularProgress variant="static" style={{color: '#F58536'}} value={70} />
                        <img src={require('../../../assets/graphics/awsec2.png')} alt="" /></li>
                    <li><CircularProgress variant="static" style={{color: '#E15343'}} value={70} />
                        <img src={require('../../../assets/graphics/awss3b.png')} alt="" /></li>
                    <li><CircularProgress variant="static" style={{color: '#009B60'}} value={70} />
                        <img src={require('../../../assets/graphics/restfulapi.png')} alt="" /></li>
                    <li><CircularProgress variant="static" style={{color: '#FD8D6F'}} value={70} />
                        <img src={require('../../../assets/graphics/mspowerpoint.png')} alt="" /></li>
                    <li><CircularProgress variant="static" style={{color: '#00B5F7'}} value={70} />
                        <img src={require('../../../assets/graphics/digitalocean.png')} alt="" /></li>
                </ul>
            </div>
        )
    }
}
