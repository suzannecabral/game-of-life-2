import React from 'react';
import './grid.css';
import {useState, useEffect} from 'react';
import { randomRange } from '../utils';


function GridSquare(props){
    let {row, square} = props;
    let squareClasses = 'grid-square';
    let coords = [row, square]

    let squareValue = square;
    let checkAlive = (square) => {
        square ? squareClasses='grid-square true' : squareClasses='grid-square false';
    }

    const handleClick = (event) => {
        event.preventDefault();
        checkAlive(square);
        console.log(coords);
    }
    return(
        <button 
            className={squareClasses} 
            onClick={(event)=>{handleClick(event)}} 
        >
            {squareValue}
        </button>
    )
}

export default GridSquare;