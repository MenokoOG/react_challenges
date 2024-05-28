import React from 'react';
import BaseWidget from './BaseWidget';
import news from '../assets/images/widgets/news.png';

const News = (props) => {
  return (
    <BaseWidget {...props}>
      <img src={news} alt="News" />
    </BaseWidget>
  );
};

export default News;
