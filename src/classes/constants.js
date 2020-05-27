
export const borderState = Object.freeze({
    OPEN: true,
    CLOSED: false
})

// Do not change the ordering. Object.keys read top down and directions rely on this.
export const opposingNeighbor = Object.freeze({
    NORTHWEST: 'SOUTHEAST',
    NORTH    : 'SOUTH',
    NORTHEAST: 'SOUTHWEST',
    WEST     : 'EAST',
    EAST     : 'WEST',
    SOUTHWEST: 'NORTHEAST',
    SOUTH    : 'NORTH',
    SOUTHEAST: 'NORTHWEST',
})

// ['NORTHWEST', 'NORTH', 'NORTHEAST','WEST','EAST','SOUTHWEST', 'SOUTH', 'SOUTHEAST',]
export const directions = Object.freeze(Object.keys(opposingNeighbor))