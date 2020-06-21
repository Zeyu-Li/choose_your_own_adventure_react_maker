import React, { Component } from 'react';

class Options extends Component {
    constructor(props) {
        super(props)
        this.init = this.init.bind(this)
    }
    init () {
        console.log(this.options)
    }
    render() {
        return (
            <div className="options">
                <ul>
                    <a id="choice"><li><p><b>{this.props.options[0]}</b></p></li></a>
                </ul>
                
            </div>
        )
    }
}

export default Options
