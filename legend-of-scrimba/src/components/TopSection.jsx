import React from "react";
import character1 from "../images/character1.png"
import character2 from "../images/character2.png"

function TopSection({ submitted }) {
    const classCondition = document.getElementsByClassName("name-input").length === 0
    return (
        <div className="top-section">
            <h1 className={submitted && !classCondition ? "second-fade-in" : null}>
                {!submitted || classCondition
                    ? "The Legend of Scrimba"
                    : "A hero has risen! The hero's name is: "}
            </h1>
            <div className="image-container">
                <img
                    className={!submitted || classCondition ? null : "fade-out-and-in"}
                    src={!submitted || classCondition ? character1 : character2} />
            </div>

        </div>
    )
}

export default TopSection