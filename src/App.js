import './App.css';
import GridContainer from './grid/GridContainer'

function App() {
  let gridSize = 20;
  return (
    <div className="App">
      <GridContainer gridSize={gridSize} />
    </div>
  );
}

export default App;
