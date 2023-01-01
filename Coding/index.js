/**
 * HMR - Hot Module Replacement
 * File Watcher Algorith - C++
 * Building - parcel   build and serve to the server
 * BUNDLING - it bundles everything
 * Minified - it minify and create production files
 *cleaning the code - it does not have console.log files
 * Super fast
 * Image Optimization - which is heavist file in browser
 * Caching while development
 * compatiblewith older browsers
 * https on dev
 * port number
 * consistent hashing algorithm
 * zero config bundler
 * Tree shaking - removing unwanted code
 */
import React from "react"; //getting this from node_modules
import ReactDOM from "react-dom/client";
// const React = require("react");
// const ReactDOM = require("react-dom");

const heading1 = React.createElement(
  "h1",
  { key: "h1", id: "title" },
  "Namaste React js"
);

//Reacr.createElement ==> Object ==> HTML(doM)
//Chapter - 2
/**  const heading2 = React.createElement("h2", { key: "h2" }, "hello");
const ulcontainer = React.createElement("ul", { key: "ul" }, [
  React.createElement("li", { key: "l1" }, "about"),
  React.createElement("li", { key: "l2" }, "Contactt"),
]);

const container = React.createElement("div", {}, [heading2, ulcontainer]);
*/

//Chpter - 3

//React Components

const HeaderComponent = () => {
  return (
    <div>
      <h1>Header component</h1>
      {HeaderComponent1()}
      {/* At the end functional component is just JS function so we can write like this also */}
    </div>
  );
};
const HeaderComponent1 = () => (
  <div>
    <h1>Header component1</h1>
  </div>
);

//JSX  ==> React.createElement ==> Object ==> HTML(doM)
//Babel converts JSX to html(DOM)

const heading3 = (
  <h1 id="title" key="h1">
    ********Hello React**********
  </h1>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeaderComponent />);
