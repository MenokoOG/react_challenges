import React from 'react';
import BaseWidget from './BaseWidget';
import stock from '../assets/images/widgets/stock.png';

const Stocks = (props) => {
  return (
    <BaseWidget {...props}>
      <img src={stock} alt="Stocks" />
    </BaseWidget>
  );
};

export default Stocks;
