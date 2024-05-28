import React from 'react';
import BaseWidget from './BaseWidget';
import weather from '../assets/images/widgets/weather.png';

const Weather = (props) => {
  return (
    <BaseWidget {...props}>
      <img src={weather} alt="Weather" />
    </BaseWidget>
  );
};

export default Weather;
