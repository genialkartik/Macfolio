import React, { Component } from 'react'
import './help.css'

export default class Help extends Component {
    render() {
        return (
            <div className="terminal-inner">
                <p>Last Login: Thur Nov 21 08:10:10 on browser.</p>
                <br/>
                <p>The default interactive shell is now browser.</p>
                <p>To update the site press: fn + f5, of click on refresh button on you browser.</p>
                <p>Need help? leave a message <a href="mailto:kartik9756@gmail.com">here</a>.</p>
                <p>(base) $kartik-tyagi:~ genialkartik$ | Work in Progress...</p>
            </div>
        )
    }
}
