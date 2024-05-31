import React from "react";
import logo1 from "../assets/images/question-solid.svg";

function Stock({ stock }) {
    const { stockName, currentPrice, prevClosingPrice, logo } = stock;

    const numericalChange = (parseFloat(currentPrice) - parseFloat(prevClosingPrice)).toFixed(2);
    const rateChange = ((numericalChange / parseFloat(prevClosingPrice)) * 100).toFixed(2);

    const colorClass = numericalChange > 0 ? "green" : numericalChange < 0 ? "red" : undefined;
    const arrow = numericalChange > 0 ? "⬆" : numericalChange < 0 ? "⬇" : "▬";

    return (
        <div className="stock-container">
            <div className={colorClass}>
                <p>{arrow}{numericalChange}</p>
                <p>{rateChange}%</p>
            </div>
            <div>
                <img className="logo" src={logo || logo1} alt="Stock Logo" />
            </div>
            <div>
                <p>{stockName}</p>
            </div>
            <div>
                <p>${currentPrice}</p>
                <p>Current Price</p>
            </div>
            <div>
                <p>Previous Close: ${prevClosingPrice}</p>
            </div>
        </div>
    );
}

export default Stock;
