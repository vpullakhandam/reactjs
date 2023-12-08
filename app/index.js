import React from "react";
import ReactDOM from "reactDOM";

const heading = React.createElement("h1", {}, "hello!");

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);
