function are_isomorphic(graph1, graph2) {
    if(graph1.length !== graph2.length) {
        return false;
    }
    let source = build_node_connections(graph1);
    let target = build_node_connections(graph2);

    for(let n = 0; n < source.length; n++) {
        if(source[n] !== target[n]) {
            return false;
        }
    }

    l = graph1.length;
    seen = [];
    map = [];

    return mapping(graph1, graph2, l, map, 0, seen);
}

function is_valid(source, target, size, vertex) {
    for (let i = 0; i < size; i++) {
        let sourceEdges = source[i];
        let targetEdges = target[vertex[i]];

        if(sourceEdges.length !== targetEdges.length) {
            return false;
        }
        for(let j = 0; j < sourceEdges.length; j++) {
            let mapEdge = vertex[sourceEdges[j]];
            let found = false;

            for(let k = 0; k < targetEdges.length; k++) {
                if(targetEdges[k] === mapEdge) {
                    found = true;
                    break;
                }
            }
            if(!found) {
                return false;
            }
        }
    }
    return true;
}

function build_node_connections(adjList) {
    return adjList.map(function(edges) {return edges.length}).sort(function(x, y) {return x - y})
}

function mapping(source, target, size, vertex, current, visited) {
    if(current === size) {
        return is_valid(source, target, size, vertex);
    }
    for(let i = 0; i < size; i++) {
        if(!visited[i]) {
            visted[i] = true;
            vertex[current] = i;
            if(mapping(source, target, size, vertex, current + 1, visited)) {
                return true;
            }
            visted[i] = false;
        }
    }
    return false;
}
