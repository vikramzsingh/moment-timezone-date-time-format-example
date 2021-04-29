import React from "react";
import ReactDOM from "react-dom";
import moment from "moment";
import "moment-timezone";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>{moment().tz("America/Los_Angeles").format()}</h2>
      <h2>{moment().tz("America/Denver").format()}</h2>
      <h2>{moment().format("MMMM D YYYY")}</h2>
      <h2>{moment().format("MMMM Do YYYY")}</h2>
      <a href="https://momentjs.com/">refrence link</a>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
