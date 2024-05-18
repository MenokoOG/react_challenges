import React from "react";

function CheckAnswerButton({disabled}) {

    return (
        <button
            className="check-answer-button"
            type="submit"
            disabled={disabled}
        >
            <span>Check Answer</span>
        </button>

    )

}

export default CheckAnswerButton