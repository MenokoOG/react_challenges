import React from "react";
import goalsIcon from "../images/goals.svg";
import toDoListIcon from "../images/to-do-list.svg";
import monthlyReportIcon from "../images/monthly-report.svg";
import settingsIcon from "../images/settings.svg";
import highlightsIcon from "../images/highlights.svg";
import newEntryIcon from "../images/new-entry.svg";

export default function Menu(props) {
    
    function scrollDown() {
        window.scrollTo({
            top: (window.innerHeight * 2),
            behavior: "smooth",
        });
    }
    
    React.useEffect(() => {
        if (props.skip) scrollDown();
    }, []);
    
    return (
        <div className="menu-wrapper">
            <div className="header-text-container">
                <h1>Life Tracker</h1>
            </div>
            <div className="main-menu-container">
                <button className="menu-item-button">
                    <img className="menu-icon" src={goalsIcon} alt="Goals" />
                    <p>Goals</p>
                </button>
                <button className="menu-item-button">
                    <img className="menu-icon" src={toDoListIcon} alt="To Do List" />
                    <p>To Do List</p>
                </button>
                <button className="menu-item-button" onClick={scrollDown}>
                    <img className="menu-icon" src={monthlyReportIcon} alt="Reports" />
                    <p>Reports</p>
                </button>
                <button className="menu-item-button">
                    <img className="menu-icon" src={settingsIcon} alt="Settings" />
                    <p>Settings</p>
                </button>
                <button className="menu-item-button">
                    <img className="menu-icon highlights" src={highlightsIcon} alt="Highlights" />
                    <p>Highlights</p>
                </button>
                <button className="menu-item-button">
                    <img className="menu-icon" src={newEntryIcon} alt="New Entry" />
                    <p>New Entry</p>
                </button>
            </div>
        </div>
    );
}
