import React from "react"

function GetNewProblemButton({clickHandler, disabled}) {

    return (
        <button 
            type="button" 
            className="new-problem-button" 
            onClick={clickHandler}
            disabled={disabled}
        >
            <span>New Problem</span>
        </button>
    )
}

export default GetNewProblemButton