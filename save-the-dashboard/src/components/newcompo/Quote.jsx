import React from 'react';
import BaseWidget from './BaseWidget';
import quote from '../assets/images/widgets/quote.png';

const Quote = (props) => {
  return (
    <BaseWidget {...props}>
      <img src={quote} alt="Quote" />
    </BaseWidget>
  );
};

export default Quote;
