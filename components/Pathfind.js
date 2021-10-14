import React, {useState, useEffect} from "react";
import Node from "./Node"
import "./Pathfind.css"
import Astar from '../algorithms/astar'

const cols = 30;
const rows = 10;

const NODE_START_ROW = 0
const NODE_START_COL = 0
const NODE_END_ROW = rows-1
const NODE_END_COL = cols-1


const Pathfind = () => {
    const [Grid, setGrid] = useState([]);
    const [Path, setPath] = useState([]);
    const [VisitedNodes, setVisitedNodes] = useState([])

    useEffect(() => {
        initializeGrid();
    }, [])

    // Create the grid
    const initializeGrid = () => {
        const grid = new Array(rows);

        for (let i=0; i<rows; i++){
            grid[i] = new Array(cols);
        }

        createSpot(grid);
        setGrid(grid);
        addNeighbours(grid);

        const startNode = grid[NODE_START_ROW][NODE_START_COL]
        const endNode = grid[NODE_END_ROW][NODE_END_COL]


        startNode.isWall = false
        for(let i=0; i<startNode.neighbours.length; i++){
            startNode.neighbours[i].isWall = false
        }
        endNode.isWall = false
        for(let i=0; i<endNode.neighbours.length; i++){
            endNode.neighbours[i].isWall = false
        }
        
        let path = Astar(startNode,endNode)
        setPath(path.path);
        setVisitedNodes(path.visitedNodes)
    };

    // Creates the spot
    const createSpot = (grid) => {
        for (let i=0; i<rows; i++){
            for (let j=0; j<cols; j++){
                grid[i][j] = new Spot(i, j);
            }
        }
    }

    // Add Neighbours
    const addNeighbours = (grid) => {
        for (let i=0; i<rows; i++){
            for (let j=0; j<cols; j++){
                grid[i][j].addneighbours(grid);
            } 
        }

    }

    // Spot constructor
    function Spot(i, j){
        this.x = i;
        this.y = j;
        this.g = 0;
        this.f = 0;
        this.h = 0;
        this.isWall = false;
        if(Math.random(1)<0.25){
            this.isWall = true;
        }
        this.isStart = this.x === NODE_START_ROW && this.y === NODE_START_COL
        this.isEnd = this.x === NODE_END_ROW && this.y === NODE_END_COL;
        this.neighbours = [];
        this.prev = undefined;
        this.addneighbours = function(grid){
            let i = this.x;
            let j = this.y;

            if (i>0) this.neighbours.push(grid[i-1][j]);
            if (i<rows-1) this.neighbours.push(grid[i+1][j]);
            if (j>0) this.neighbours.push(grid[i][j-1]);
            if (j<cols-1) this.neighbours.push(grid[i][j+1]);
            
        }


    }

    const visualizeShortestPath = (shortestPathNodes) => {
        for (let i=0; i<shortestPathNodes.length; i++){
            setTimeout(()=>{
                const node = shortestPathNodes[i];
                document.getElementById(`node-${node.x}-${node.y}`).className = "node node-shortest-path"
            }, 10*i)
        }
    }

    const visualizePath = () => {
        for (let i=0; i<= VisitedNodes.length; i++){
            if (i === VisitedNodes.length){
                setTimeout(()=>{
                    visualizeShortestPath(Path);
                }, 20*i);
            } else {
                setTimeout(()=>{
                    const node = VisitedNodes[i];
                    let s = `node-${node.x}-${node.y}`
                    console.log(document.getElementById(s))
                    document.getElementById(s).className = "node node-visited"
                }, 20*i);
            }
        }    
    }

    function repeat(){
        window.location.reload()
    }

    return (
        <div className="Wrapper">
            <h1 className="title">Vizualizator A*</h1>
            <button onClick={visualizePath} className="button-3">Vizualizeaza</button>
            <button onClick={repeat} className="button-2">Reload</button>
            <div className="grid">
                {Grid.map((row, rowIndex) => {
                    return (
                        <div key={rowIndex} className="rowWrapper">
                            {row.map((col, colIndex) => {
                                const {isStart, isEnd, isWall} = col;
                                return(
                                    <Node 
                                        key={colIndex} 
                                        isStart={isStart} 
                                        isEnd={isEnd} 
                                        row={rowIndex} 
                                        col={colIndex}
                                        isWall={isWall}
                                    />
                                )
                            })}
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Pathfind;