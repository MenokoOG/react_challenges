import React from "react";

function StartButton({clickHandler}) {
    return (
        <button 
            className="start-button"
            type="button"
            onClick={clickHandler}
        >
            <span>Start</span> 
        </button>
    )
}

export default StartButton