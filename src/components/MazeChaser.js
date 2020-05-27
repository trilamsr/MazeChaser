import React, { Component } from 'react';
import Maze from '../classes';
import Grid from './Grid'

export default class MazeChaser extends Component {
    constructor(props) {
        super(props)
        this.Maze = new Maze(10,10)
    }

    clickTest = () => {
        this.Maze.mazeMakerDFS()
        this.forceUpdate()
    }

    render() {
        return (
            <>
                <div>
                    <button onClick={this.clickTest}>click</button>
                </div>
                <Grid grid={this.Maze.grid} move={this.Maze.totalMoves}/>
            </>)
    }
}

