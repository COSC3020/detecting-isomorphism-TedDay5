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

const graphC = [
    [1, 0, 1],
    [0, 1, 0],
    [1, 0, 1],
]

assert(are_isomorphic(graphA, graphB) === true);
assert(are_isomorphic(graphA, graphC) === false);
assert(are_isomorphic(graphB, graphC) === false);
