import logo from './logo.svg';
import './App.css';
import HexagonalBoard from '../src/Board/HexBoard.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <HexagonalBoard size={1} />
      </header>
    </div>
  );
}

export default App;



// import { HexGrid, Layout, Hexagon, GridGenerator, Hex } from 'react-hexgrid';
// export default function App() {
//   const hexagons = GridGenerator.hexagon(3);

//   return (
//     <div className="App">c
//       <h1>Catan</h1>
//       <HexGrid width={450} height={450} viewBox="-43 -50 100 100">
//         <Layout size={{ x: 7, y: 7 }} spacing={1.02} flat={false}>
//           {hexagons.map((hex: Hex, i: number) => (
//             <Hexagon key={i} q={hex.q} r={hex.r} s={hex.s} />
//           ))}
//         </Layout>
//       </HexGrid>
//     </div>
//   );
// }