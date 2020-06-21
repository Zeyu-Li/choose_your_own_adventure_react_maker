import React, { Component } from 'react';
import Options from './Options'


class Game extends Component {

    state = {
        data: []
    }

    componentDidMount() {
        fetch('json/data.json')
            .then(data => data.json())
            .then(data => this.setState({data}));
    }

    render() {
        return (
            <Options />
        )
    }
}

export default Game
