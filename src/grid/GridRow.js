import React from 'react';
import './grid.css';
import { randomRange } from '../utils'

import GridSquare from './GridSquare.js';

function GridRow(props){
    const {displayRow, rowNum} = props;
    
    let displaySquares = [];
    displayRow.forEach((square, index) => {
        displaySquares.push(
        <GridSquare 
            square = {square} 
            key = {randomRange(1,99999999)} 
            rowNum = {rowNum} 
            squareNum={index} 
        />)
    })

    return(
        <div className="grid-row">
            {displaySquares}
        </div>
    )
}

export default GridRow;