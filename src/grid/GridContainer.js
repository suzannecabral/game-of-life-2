import React from 'react';
import './grid.css';
import { useEffect } from 'react';
import { randomRange } from '../utils'

import GridRow from './GridRow.js';


function GridContainer(props){
    const {thisGrid, setThisGrid} = props;
    
    let displayRows = [];
    thisGrid.forEach((row, index) => {
        displayRows.push(
        <GridRow 
            displayRow = {row} 
            key = {randomRange(1,99999999)} 
            rowNum = {index} 
        />)
    })
    
    return(
        <div className="grid-container">
            {displayRows}
        </div>
    );
}

export default GridContainer;