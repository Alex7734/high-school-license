function Astar(startNode, endNode, choice){
    console.log(choice)
    let openSet = []
    let closedSet = []
    let path = []
    let visitedNodes = []

    openSet.push(startNode);
    while (openSet.length > 0){
        let leastIndex = 0;
        for (let i=0; i<openSet.length; i++){
            if (openSet[i].f < openSet[leastIndex].f){
                leastIndex = i;
            }
        }

        let current = openSet[leastIndex];
        visitedNodes.push(current)
        if (current === endNode){
            let temp = current;
            path.push(temp);
            while (temp.prev){
                path.push(temp.prev);
                temp = temp.prev;
            }
            return {path, visitedNodes}
        }

        openSet = openSet.filter(elt => elt !== current);
        closedSet.push(current)

        var neighbours = current.neighbours;
        for (let i=0; i<neighbours.length; i++){
            let neighbour = neighbours[i];
            if (!closedSet.includes(neighbour) && !neighbour.isWall){
                let tempG = current.g + 1;
                let newPath = false;
                if (openSet.includes(neighbour)){
                    if (tempG < neighbour.g){
                        neighbour.g = tempG;
                        newPath = true;
                    } 
                } else {
                    neighbour.g = tempG;
                    newPath = true; 
                    openSet.push(neighbour);
                }
                
                if (newPath){
                    if (choice == 0){
                        neighbour.h = heuristic(neighbour, endNode);
                    } else {
                        neighbour.h = 0
                    }
                    neighbour.f = neighbour.h + neighbour.g;
                    neighbour.prev = current;
                }

            }

        }
    }
    return {path, visitedNodes, error:"No path found!"}
}

function heuristic(a, b){
    let d = Math.abs(a.x-b.x) + Math.abs(a.y - b.y)
    return d
}

export default Astar;