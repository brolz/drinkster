import React from "react";
import { useState, useEffect } from "react";
import { Link, Router } from "react-router-dom";

import "./navbar.style.scss";

export default function NavBar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div className="navBar">
      <div className="navLeft">
        <h3>DRINKSTER</h3>
        <ul>
          <li>Trending</li>
          <li>Our Story</li>
          <li>Contact</li>
        </ul>
      </div>
      <div className="navRight">
        <ul>
          <li>Sign Up</li>
          <li>{!isLoggedIn?"Sign In": "Logout"}</li>
        </ul>
      </div>
    </div>
  );
}
