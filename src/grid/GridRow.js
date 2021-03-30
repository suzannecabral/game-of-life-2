import React from 'react';
import './grid.css';

import GridSquare from './GridSquare.js';

function GridRow(props){
    const {displayRow, rowNum, thisGrid, setThisGrid} = props;
    
    let displaySquares = [];
    displayRow.forEach((square, index) => {
        displaySquares.push(
        <GridSquare 
            square = {square} 
            key = {rowNum.toString() + index.toString()} 
            rowNum = {rowNum} 
            squareNum={index} 
            thisGrid = {thisGrid}
            setThisGrid = {setThisGrid}
        />)
    })

    return(
        <div className="grid-row">
            {displaySquares}
        </div>
    )
}

export default GridRow;