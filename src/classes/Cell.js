import {borderState} from './constants'


const allClosed = Object.freeze([borderState.CLOSED, borderState.CLOSED, borderState.CLOSED, borderState.CLOSED]);
// const allOpened = Object.freeze([borderState.OPEN  , borderState.OPEN  , borderState.OPEN  , borderState.OPEN  ]);

export default class Cell {
    constructor(i, j) {
        [this.i, this.j] = [i, j];
        this.VISITED = false;
        this.ORIGIN = false;
        this.DESTINATION = false;
        [this.NORTH, this.SOUTH, this.EAST, this.WEST] = allClosed;
        [this.NORTHWEST, this.NORTHEAST, this.SOUTHWEST, this.SOUTHEAST] = allClosed
    }

    get isOrigin () {
        return this.ORIGIN === true;
    }

    get isDestination () {
        return this.DESTINATION === true;
    }

    get isVisited() {
        return this.VISITED === true;
    }

    markVisited() {
        this.VISITED = true;
        return this
    }

    markUnvisited() {
        this.VISITED = false;
        return this
    }
}