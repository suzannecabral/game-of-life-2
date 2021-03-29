import React from 'react';
import './grid.css';
import {useState, useEffect} from 'react';
import { randomRange } from '../utils'

import GridRow from './GridRow';

function GridContainer(props){
    const {gridSize} = props;

    const [thisGrid, setThisGrid] = useState([]);

    let grid = [];
    let gridGen = (gridSize) => {
        // for each row:
        for(let i=0; i<gridSize; i++){
            let thisRow = [];
            //for each square:
            for(let j=0; j<gridSize; j++){
                thisRow.push(randomRange(0,1))
            }
            grid.push(thisRow)
        }
        console.log('Grid generated');
    }

    let displayGrid = [];
    let gridMap = (thisGrid) => {
        let i = 0;
        for(i=0; i<thisGrid.length;i++){
            let rowNum = i;
            let rowData = thisGrid[i];
            let thisRow = {
                rowNum: rowNum,
                rowData: rowData,
            }
            displayGrid.push(thisRow);
        }
        console.log('Grid mapped');
    }

    useEffect(()=>{
        console.log('Grid Initialize Effect');
        gridGen(gridSize);
        setThisGrid(grid);
        gridMap(thisGrid);
    },[])

    // useEffect(()=>{
    //     console.log('Grid Update Effect');
    //     gridMap(thisGrid);
    // }, [thisGrid])

    return(
        <div className="grid-container">
            {thisGrid.map(row=>(
                <GridRow 
                    displayRow = {row}
                    rowNum = {row.rowNum}
                    key = {randomRange(1,99999999)}
                />
            ))}
        </div>
    );
}

export default GridContainer;