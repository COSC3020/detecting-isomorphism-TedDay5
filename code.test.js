const fs = require('fs');
const assert = require('assert');

eval(fs.readFileSync('code.js')+'');

const graphA = [
    [0, 1, 1, 0],
    [1, 0, 0, 1],
    [1, 0, 0, 1],
    [0, 1, 1, 0]
]

const graphB = [
    [0, 1, 1, 0],
    [1, 0, 0, 1],
    [1, 0, 0, 1],
    [0, 1, 1, 0]
]

const graphSmallC = [
    [1, 0, 1],
    [0, 1, 0],
    [1, 0, 1]
]

const graphSmallD = [
    [1, 0, 1],
    [0, 1, 0],
    [1, 0, 1]
]

const graphFullE = [
    [0, 1, 1, 1],
    [1, 0, 1, 1],
    [1, 1, 0, 1],
    [1, 1, 1, 0]
]

const graphFullF = [
    [0, 1, 1, 1],
    [1, 0, 1, 1],
    [1, 1, 0, 1],
    [1, 1, 1, 0]
]

const graphDifferentG = [
    [0, 1, 0, 1],
    [1, 0, 0, 0],
    [1, 0, 0, 1],
    [0, 1, 1, 0]
]

const graphDifferentH = [
    [0, 1, 0, 1],
    [1, 0, 0, 0],
    [1, 0, 0, 1],
    [0, 1, 1, 0]
]

const graphLargeI = [
    [0, 1, 1, 1, 0],
    [1, 0, 0, 0, 1],
    [1, 0, 0, 0, 1],
    [1, 0, 0, 0, 1],
    [0, 1, 1, 1, 0]
]

const graphLargeJ = [
    [0, 1, 1, 1, 0],
    [1, 0, 0, 0, 1],
    [1, 0, 0, 0, 1],
    [1, 0, 0, 0, 1],
    [0, 1, 1, 1, 0]
]

const emptyK = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0]
]

const emptyL = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0]
]

assert(are_isomorphic(graphA, graphB) === true);
assert(are_isomorphic(graphA, graphSmallC) === false);
assert(are_isomorphic(graphB, graphSmallC) === false);
assert(are_isomorphic(graphSmallC, graphSmallD) === true);
assert(are_isomorphic(graphFullE, graphFullF) === true);
assert(are_isomorphic(graphA, graphFullF) === false);
assert(are_isomorphic(graphDifferentG, graphDifferentH) === true);
assert(are_isomorphic(graphA, graphDifferentH) === false);
assert(are_isomorphic(graphLargeI, graphLargeJ) === true);
assert(are_isomorphic(emptyK, emptyL) === true);
assert(are_isomorphic(graphA, emptyL) === false);
