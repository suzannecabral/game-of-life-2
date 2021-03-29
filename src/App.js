import './App.css';
import React, { useState, useEffect } from 'react';
import GridContainer from './grid/GridContainer'
import { randomRange } from './utils'

function App() {
  
  let gridSize = 20;
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

  useEffect(()=>{
      console.log('Grid Initialize Effect');
      gridGen(gridSize);
      setThisGrid(grid);
  },[])

  return (
    <div className="App">
      <GridContainer 
        gridSize={gridSize}
        thisGrid={thisGrid}
      />
    </div>
  );
}

export default App;
