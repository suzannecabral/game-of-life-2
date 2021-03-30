import React from 'react';
import './grid.css';
import { deepCopy } from '../utils'

function GridSquare(props){
    let {rowNum, squareNum, square, thisGrid, setThisGrid} = props;
    let coords = [rowNum, squareNum]
    
    let clickToggle = (square) => {
        let newGrid = deepCopy(thisGrid)
        if(square===0){
            newGrid[rowNum][squareNum] = 1;
            setThisGrid(newGrid);
        }else{
            newGrid[rowNum][squareNum] = 0;
            setThisGrid(newGrid);
        }
        // console.log('toggled');
    }

    const handleClick = (event) => {
        event.preventDefault();
        clickToggle(square);
        // console.log('coords: ', coords);
        // console.log('Value: ', square);
        // console.log('----')
    }

    return(
        <button 
            className={square===0 ? 'grid-square false' : 'grid-square true'} 
            onClick={(event)=>{handleClick(event)}} 
        >
        </button>
    )
}

export default GridSquare;