import React from 'react';
import './grid.css';


import GridRow from './GridRow.js';


function GridContainer(props){
    const {thisGrid, setThisGrid} = props;
    
    let displayRows = [];
    thisGrid.forEach((row, index) => {
        displayRows.push(
        <GridRow 
            displayRow = {row} 
            key = {index.toString()} 
            rowNum = {index} 
            thisGrid = {thisGrid}
            setThisGrid = {setThisGrid}
        />)
    })
    
    return(
        <div className="grid-container">
            {displayRows}
        </div>
    );
}

export default GridContainer;