import React from 'react';
import './grid.css';
import {useState, useEffect} from 'react';
import { randomRange } from '../utils'

import GridSquare from './GridSquare';

function GridRow(props){
    const {displayRow, rowNum} = props;
    
    return(
        <div className="grid-row">
            {displayRow.map(square=>(
                <GridSquare 
                    square={square} 
                    key={randomRange(1,99999999)} 
                    row={displayRow}
                />
            ))}
        </div>
    )
}

export default GridRow;