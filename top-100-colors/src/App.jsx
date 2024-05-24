import { nanoid } from "nanoid";
import colorData from "./data/colorData";
import Header from "./components/Header";
import "./App.css";

function ColorCard({ rank, hex }) {
  return (
    <div className="color-card" style={{ background: hex }}>
      <p>
        <span>{rank}.</span> {hex}
      </p>
    </div>
  );
}

function App() {
  return (
    <div className="wrapper">
      <Header />
      
      {/*------Your ColorCard elements below!-----------*/}
      {colorData.map((color, index) => (
        <ColorCard key={nanoid()} rank={index + 1} hex={color} />
      ))}
      {/*------Your ColorCard elements above!-----------*/}
    </div>
  );
}

export default App;
