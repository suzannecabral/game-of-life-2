import React from 'react';
import './grid.css';
import {useState, useEffect} from 'react';
import { randomRange } from '../utils'

import GridRow from './GridRow';

function GridContainer(props){
    const {thisGrid} = props;

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
        gridMap(thisGrid);
        console.log('display Grid effect', displayGrid)
    },[]);

    return(
        <div className="grid-container">
            {thisGrid.map(row=>(
                <GridRow 
                    displayRow = {row}
                    // rowNum = {obj.rowNum}
                    key = {randomRange(1,99999999)}
                />
            ))}
        </div>
    );
}

export default GridContainer;