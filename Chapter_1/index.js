const heading1 = React.createElement("h1", { key: "h1" }, "Namaste React js");
const heading2 = React.createElement("h2", { key: "h2" }, "hello");
const container = React.createElement("div", {}, [heading1, heading2]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(container);
