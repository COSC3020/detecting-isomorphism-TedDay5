const fs = require('fs');
const jsc = require('jsverify');

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

const tests = [
    {function: are_isomorphic, graph1: graphA, graph2: graphB, result: true, name: 'Isomorphic Test' },
    {function: are_isomorphic, graph1: graphA, graph2: graphC, result: true, name: 'Non-Isomorphic Test' },
    {function: are_isomorphic, graph1: graphB, graph2: graphC, result: true, name: 'Non-Isomorphic Test' },
];

tests.forEach(test => {
    const output = test.function(test.graph1, test.graph2);
    if (output === test.result) {
        console.log('${test.name} PASSED!');
    }
    else {
        console.error('${test.name} FAILED.: ${output} != ${test.result}');
    }
});
