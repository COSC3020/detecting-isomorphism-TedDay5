const fs = require('fs');
const assert = require('assert');

eval(fs.readFileSync('code.js')+'');

const graphA = [
    [1, 2],
    [0, 3],
    [1, 2],
    [0, 3]
]

const graphB = [
    [3, 4],
    [3, 4],
    [0, 2],
    [0, 2]
]

const graphC = [
    [1, 2, 3],
    [1, 2],
    [0, 3],
    [0, 3]
]

assert(are_isomorphic(graphA, graphB) === true);
assert(are_isomorphic(graphA, graphC) === false);
assert(are_isomorphic(graphB, graphC) === false);
