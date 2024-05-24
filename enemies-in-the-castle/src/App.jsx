import { useState, useEffect } from "react";
import Enemy from "./components/Enemy";
import Button from "./components/Button";
import runGame from "./utilities/runGame";
import initialEnemyData from "./data/initialEnemyData";
import './App.css';

function App() {
  const [gameRunning, setGameRunning] = useState(false);
  const [enemiesData, setEnemiesData] = useState(initialEnemyData);

  useEffect(() => {
    if (gameRunning) {
      const gameInterval = setInterval(runGame(setEnemiesData), 20);
      return () => clearInterval(gameInterval);
    }
  }, [gameRunning]);

  return (
    <div className="wrapper">
      <div className="meadow-container">
        <div className="castle-container">
          {enemiesData.map((enemy, index) => (
            <Enemy
              key={index}
              currentImage={enemy.currentImage}
              position={enemy.position}
              orientation={enemy.orientation}
            />
          ))}
        </div>
      </div>
      <Button stateProps={{ gameRunning, setGameRunning }} />
    </div>
  );
}

export default App;
