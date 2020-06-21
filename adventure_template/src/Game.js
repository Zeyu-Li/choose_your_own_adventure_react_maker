import React, { Component } from 'react';
import Options from './Options'
import {Background} from './Background'


class Game extends Component {
    constructor(props) {
        super(props)
        this.changeLevel = this.changeLevel.bind(this)
    }

    changeLevel() {
        console.log("Hi")

    }

    state = {
        data: []
    }

    componentDidMount() {
        fetch('json/data.json')
            .then(data => data.json())
            .then(data => this.setState({data}))
            .then(console.log() ); // TODO: call method
    }

    render() {
        return (
            <div className="main_content">
                <Background image="images/main.png" background_color="#3775b0" fadeIn={true} fadeOut={true} />
                <Options options={[["Press Space to continue"], [2]]} />
            </div>
        )
    }
}

export default Game
