import React, { Component } from 'react';
import {Text} from './Text'
// generates options

class Options extends Component {

    click(nextScene) {
        this.props.change(nextScene)
    }

    render() {
        return (
            <div className="options">
                <Text key={'text_' + this.props.altKey} text={this.props.text} />
                {/* creates choices */}
                <ul>
                    {this.props.options.map((item, i) => {
                        return (
                            <a onClick={() => this.click(item[1])} key={`options-${i}`} href="#/"><li className="pick" id={"choice-"+item[1]}><p><b>{item[0]}</b></p></li></a>
                        )
                    })}
                </ul>
            </div>
        )
    }
}

export default Options
