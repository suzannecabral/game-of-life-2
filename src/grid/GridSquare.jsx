import React from 'react';
import './grid.css';
import {useState, useEffect} from 'react';
import { randomRange } from '../utils';


function GridSquare(props){
    let {row, square} = props;
    let squareValue = square;
    // let coords = [row, square]
    let clickToggle = (square) => {
        // square===0 ? square = 1 : square = 0;
        if(square==0){
            square = 1;
        }else{
            square = 0;
        }
    }

    const handleClick = (event) => {
        event.preventDefault();
        clickToggle(square);
        console.log('row: ', row);
        console.log('square: ', square);
    }

    // useEffect(()=>{
    //     setStyles(square);
    // },[]);

    return(
        <button 
            className={square===0 ? 'grid-square false' : 'grid-square true'} 
            onClick={(event)=>{handleClick(event)}} 
        >
            {squareValue}
        </button>
    )
}

export default GridSquare;