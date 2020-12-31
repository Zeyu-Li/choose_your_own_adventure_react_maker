import React, { Component } from 'react';
import Options from './Options'
import {Background} from './Background'
// main class


class Game extends Component {
    // a Game object that acts like the main container for this game "engine"

    // state var containing all the levels and necessary info on those levels
    state = {
        data: [],
        levelsData: [],
        loaded: false,
        level: 1,
        reload: false
    }


    changeLevel = (number) => {
        // changes level given the number
        this.setState({level: number})

        // rerender game component
        this.setState({reload: !this.state.reload})
    }

    init() {
        // once we get the json, this is called

        // for each level, save to state
        for (let tmp of Object.entries(this.state.data)) {
            let option = tmp[1][4].value
            let options = []
            // split by \n and then separate by [
            option = option.split("\n")

            // regular expression to get text and
            let re = /(.+)\[\s*(\d+)\s*\]/
            option.forEach(element => {
                let match = element.match(re)
                options.push([match[1], parseInt(match[2])])
            });

            let level = {
                text: tmp[1][1].value,
                image: tmp[1][2].value,
                color: tmp[1][3].value,
                options: options
            }
            this.state.levelsData.push(level)
        }
    }

    componentDidMount() {
        // gets json and calls all the necessary inits
        this.setState({loaded: true})
        fetch('json/data.json')
            .then(data => data.json())
            .then(data => this.setState({data}))
            .then(_ => this.init())
            .then(data => this.setState({data, loaded: false}))
    }

    render() {
        return (
            <div className="main_content">
                {this.state.loaded ? "loading... Perhaps you are not running it on a server":
                this.state.levelsData.map((item, i) => {
                    if (i + 1 === this.state.level){
                        return (
                            <span id="solid" className={"scene-" + (i + 1)} style={{display: i + 1 === this.state.level ? 'hidden': null}} key={`scene-${i}`}>
                                <Background key={'back_' + i} image={item.image ? "images/" + item.image : null} background_color={item.color} fadeIn={true} fadeOut={true} />
                                <Options key={'options_' + i} altKey={i} options={item.options} text={item.text} change={this.changeLevel} />
                            </span>
                        )
                    } else {return ''}
                })
                }
            </div>
        )
    }
}

export default Game
