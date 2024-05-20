// src/App.jsx
import React from 'react';
import housesForSale from './data/housesForSale';
import logo from './images/logo.png';
import HouseCard from './components/HouseCard';

import './App.css';

function App() {
  const houseCards = housesForSale.map((houseData, index, array) => (
    <HouseCard key={houseData.id} houseData={houseData} index={index} array={array} />
  ));

  return (
    <div className="wrapper">
      <header>
        <img className="logo" src={logo} alt="Logo" />
      </header>
      <div className="house-cards-container">
        {houseCards}
      </div>
    </div>
  );
}

export default App;
