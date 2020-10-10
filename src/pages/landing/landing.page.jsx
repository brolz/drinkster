import React from 'react';

import "./landing.style.scss";
import cocktail from "../../images/cocktailLanding.png"

export default function Landing() {
    return (
        <div className="landingPage">
        <div className="landingLeft">
            <h1>Show Your Drinks with style!</h1>
            <p>Keep a list of your drinks all in one place and show your recipe easily!</p>
        </div>
        <div className="landingRight">
            <img src={cocktail} className="imageDrink" />
        </div>
        </div>
    )
}
