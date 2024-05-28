import React, { useState, useEffect } from 'react';
import BaseWidget from './BaseWidget';

const Clock = (props) => {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const ticker = setInterval(() => setDate(new Date()), 500);
    return () => clearInterval(ticker);
  }, []);

  const dayName = date.toLocaleString([], { weekday: 'long' });
  const dayNumber = date.getDate();
  const month = date.toLocaleString([], { month: 'long' });
  const year = date.getFullYear();
  const time = date.toLocaleString([], {
    hour: 'numeric',
    minute: '2-digit',
  });

  return (
    <BaseWidget {...props}>
      <div>{dayName}</div>
      <div className="month">
        {month} {dayNumber}, {year}
      </div>
      <div className="time">
        <div>{time}</div>
      </div>
    </BaseWidget>
  );
};

export default Clock;
