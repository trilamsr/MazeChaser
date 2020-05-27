import React, {PureComponent} from 'react';
import {borderState} from './../classes/constants';
import uuid from 'react-uuid'

class Cell extends PureComponent {
    render() {
        const cell = this.props
        let classNames = ['cell'];
        if (cell.NORTH === borderState.CLOSED) classNames.push('north')
        if (cell.SOUTH === borderState.CLOSED) classNames.push('south')
        if (cell.EAST  === borderState.CLOSED) classNames.push('east')
        if (cell.WEST  === borderState.CLOSED) classNames.push('west')
        if (cell.SOUTHEAST === borderState.CLOSED) classNames.push('southeast')
        if (cell.SOUTHWEST === borderState.CLOSED) classNames.push('southwest')
        if (cell.NORTHWEST  === borderState.CLOSED) classNames.push('northwest')
        if (cell.NORTHEAST  === borderState.CLOSED) classNames.push('northeast')
        if (cell.VISITED) classNames.push('visited');
        if (cell.CURRENT) classNames.push('current')
        if (cell.ORIGIN) classNames.push('origin')
        if (cell.DESTINATION) classNames.push('destination')
        return (<div className={classNames.join(' ')}></div>)
    }
}

const Row = props => {
    const cells = props.row.map((cell, ind) => <Cell key={uuid()} {...cell}/>); 
    return (<div className="row">{cells}</div>)
}


const Grid = props => {
    console.log(props)
    const rows = props.grid.map((row, ind) => <Row key={uuid()} row={row}/>)
    return (<div className="grid">{rows}</div>)
}



export default Grid