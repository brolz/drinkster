import React from "react";
import { useState, useEffect } from "react";
import { Link, Router } from "react-router-dom";
import { Col, Menu, Row } from "antd";

import "antd/dist/antd.css";
import "./navbar.style.scss";

export default function NavBar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const NAV_ITEMS_CENTER = {
    display: "Grid",
    placeItems: "center",
  };

  return (
    <Menu mode="horizontal">
      <Row className="navBa">
        <Col span={8} style={NAV_ITEMS_CENTER}>
          <h3>DRINKSTER</h3>
        </Col>
        <Col span={8} style={NAV_ITEMS_CENTER}>
          <Menu mode="horizontal">
            <Menu.Item>Trending</Menu.Item>
            <Menu.Item>Categories</Menu.Item>
            <Menu.Item>About</Menu.Item>
          </Menu>
        </Col>
        <Col span={8} style={NAV_ITEMS_CENTER}>
          <Menu mode="horizontal">
            <Menu.Item>Sign Up</Menu.Item>
            <Menu.Item>{!isLoggedIn ? "Login" : "Logout"}</Menu.Item>
          </Menu>
        </Col>
      </Row>
    </Menu>
  );
}
