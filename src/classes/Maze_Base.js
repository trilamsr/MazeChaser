import Cell from './Cell'
import {directions, borderState, opposingNeighbor} from './constants'
import {randomElementInArray} from './../Utilities'


export default class Maze_Base {
    constructor(width, height, includesDiagonal = false) {
        if (width < 1 || height < 1) {
            throw new Error('Minimum width and height both must be larger than 1')
        }
        this.grid = this.createGrid(width, height)
        this.isDiagonalGame = includesDiagonal;
        this.totalMoves = 0;
    }

    increaseMoves() {
        this.totalMoves += 1;
    }

    resetMoves() {
        this.totalMoves = 0;
    }
    
    createGrid(width, height) {
        const row = i => [...Array(width)].map((__ele, j) => new Cell(i, j))
        const grid = [...Array(height)].map((__ele, i) => row(i))
        return grid
    }

    isInbound(i, j) {
        const isInboundRow = 0 <= i && i < this.grid.length;
        const isInboundCol = 0 <= j && j < this.grid[0].length;
        return isInboundCol && isInboundRow;
    }

    isDiagonal(cellA, cellB) {
        const [i, j] = [cellA.i, cellA.j];
        const isTopLeft = cellB.i === i-1 && cellB.j === j-1
        const isBottomRight = cellB.i === i+1 && cellB.j === j+1
        const isTopRight = cellB.i === i-1 && cellB.j === j+1
        const isBottomLeft = cellB.i === i+1 && cellB.j === j-1
        return isBottomLeft||isTopRight||isBottomRight||isTopLeft
    }

    *adjacentNeighbors(cell) {
        const [i, j] = [cell.i, cell.j]
        let directions_ind = -1
        for (let di = -1; di <= 1; di++) {
            for (let dj = -1; dj <= 1; dj++) {
                if (di === 0 && dj === 0) continue;
                directions_ind+= 1
                if (!this.isInbound(i+di, j+dj)) continue
                const nei = this.grid[i+di][j+dj]
                if (!this.isDiagonal(cell, nei) || this.isDiagonalGame) {
                    yield [directions[directions_ind], nei]
                }
            }
        }
    }

    *adjacentUnvisitedNeighbors(cell) {
        for (let [, nei] of this.adjacentNeighbors(cell)) {
            if (!nei.isVisited) yield nei
        }
    }

    connect(cellA, cellB) {
        for (const [dir, nei] of this.adjacentNeighbors(cellA)) {
            if (nei === cellB) {
                [cellA[dir], cellB[opposingNeighbor[dir]]]= [borderState.OPEN, borderState.OPEN]
            }
        }
    }

    disconnect(cellA, cellB) {
        for (const [dir, nei] of this.adjacentNeighbors(cellA)) {
            if (nei === cellB) {
                [cellA[dir], cellB[opposingNeighbor[dir]]]= [borderState.CLOSED, borderState.CLOSED]
            }
        }
    }

    mazeMakerDFS() {
        const origin = this.grid[0][0].markVisited()
        const stack = [origin];
        while (stack.length > 0) {
            this.increaseMoves()
            let cur = stack.pop();
            let unvisitedNei = Array.from(this.adjacentUnvisitedNeighbors(cur))
            if (unvisitedNei.length === 0) continue
            stack.push(cur)
            const randNei = randomElementInArray(unvisitedNei)
            this.connect(cur, randNei)
            stack.push(randNei.markVisited())
        }
    }
}