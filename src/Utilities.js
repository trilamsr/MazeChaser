export const randomIntRange = (min, max) => {
    const ceilMin = Math.ceil(min);
    const floorMax = Math.floor(max);
    const randInt = Math.floor(Math.random()*(floorMax-ceilMin))
    return min+randInt
}

export const randomElementInArray = array => array[Math.floor(Math.random() * array.length)]