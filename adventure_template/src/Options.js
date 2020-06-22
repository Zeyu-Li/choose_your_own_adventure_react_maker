import React, { Component } from 'react';
import {Text} from './Text'
// generates options

class Options extends Component {
    constructor(props) {
        super(props)
    }

    click(nextScene) {
        this.props.change(nextScene)
    }

    render() {
        return (
            <div className="options">
                <Text key={'text' + this.props.altKey} text={this.props.text} />
                {/* creates choices */}
                <ul>
                    {this.props.options.map((item, i) => {
                        return (
                            <a onClick={() => this.click(item[1])}><li class="pick" id={"choice-"+item[1]}><p><b>{item[0]}</b></p></li></a>
                        )
                    })}
                </ul>
            </div>
        )
    }
}

export default Options
