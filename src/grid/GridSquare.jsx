import React from 'react';
import './grid.css';
import {useState, useEffect} from 'react';
import { randomRange } from '../utils';


function GridSquare(props){
    let {row, square} = props;
    let clickToggle = (square) => {
        if(square===0){
            square = 1;
        }else{
            square = 0;
        }
        console.log('toggled');
    }

    const handleClick = (event) => {
        event.preventDefault();
        clickToggle(square);
        console.log('row: ', row);
        console.log('square: ', square);
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