import logo from './logo.svg';
import './App.css';
import HexagonalBoard from '../src/Board/HexBoard.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <HexagonalBoard size={5} />
      </header>
    </div>
  );
}

export default App;
