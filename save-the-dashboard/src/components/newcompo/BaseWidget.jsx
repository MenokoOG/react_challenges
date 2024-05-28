import React from 'react';
import Draggable from 'react-draggable';

const BaseWidget = ({ name, gridArea, dragHandler, getOffset, changeHandler, children }) => {
  return (
    <div className={`widget-wrapper ${name}`} style={{ gridArea: `area-${gridArea}` }}>
      <Draggable
        onStop={dragHandler}
        defaultPosition={getOffset(name)}
        cancel="button"
      >
        <div className={`widget ${name}`}>
          <button
            className="remove-button"
            name={name}
            onClick={changeHandler}
          ></button>
          {children}
        </div>
      </Draggable>
    </div>
  );
};

export default BaseWidget;
