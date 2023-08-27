const parent = React.createElement("div", { id: "parent" }, [
  React.createElement(
    "div",
    { id: "child1" },
    React.createElement("h1", { id: "title" }, "I'm a h1 Tag")
  ),
  React.createElement(
    "div",
    { id: "child2" },
    React.createElement("h2", { id: "title" }, "I'm a h2 Tag")
  ),
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
