import React from "react";
import { BrowserRouter, Link } from "react-router-dom";
import { Router1 } from "./router/Router1";
import "./styles.css";
// import { Top } from "./Top";

export default function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Link to="/">Top</Link>
        <br />
        <Link to="/page1">Page1</Link>
        <br />
        <Link to="/page2">Page2</Link>
        <Router1 />
      </div>
    </BrowserRouter>
  );
}
