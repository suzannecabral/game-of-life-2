import React from 'react';
import './grid.css';
import { randomRange } from '../utils'

import GridSquare from './GridSquare.js';

function GridRow(props){
    const {displayRow, rowNum} = props;
    
    return(
        <div className="grid-row">
            {displayRow.map(square=>(
                <GridSquare 
                    square={square} 
                    key={randomRange(1,99999999)} 
                    row={displayRow}
                    rowNum={rowNum}
                />
            ))}
        </div>
    )
}

export default GridRow;