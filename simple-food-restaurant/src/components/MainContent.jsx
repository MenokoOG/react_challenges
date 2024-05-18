import React from 'react';
import ImageContainer from './ImageContainer';

const MainContent = () => (
  <main>
    <h1 className="logo-container">Simple Food Restaurant</h1>
    <p className="info-container">
      We make simple food for simple people. Want a sandwich? You got it. 
      A hot dog? Coming right up. Poached salmon eggs with fire-roasted asparagus fritters 
      hand-glazed in locally-sourced artisanal honey? Get out of here. 
      Try the Fancy Food Cafe across the street.
    </p>
    <ImageContainer />
  </main>
);

export default MainContent;
