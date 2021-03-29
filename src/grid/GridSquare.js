import React from 'react';
import './grid.css';

function GridSquare(props){
    let {rowNum, squareNum, square} = props;
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
        console.log('row: ', rowNum);
        console.log('square: ', squareNum);
        console.log('Value: ', square);
        console.log('----')
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