import React from "react";
import "./App.css";

import NavBar from "./components/navbar/navbar.component";
import Landing from './pages/landing/landing.page';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Landing />
    </div>
  );
}

export default App;
