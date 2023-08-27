const heading = React.createElement(
  "h1",
  {
    id: "heading",
    class: "title",
  },
  "Hello World!"
);
// const root = document.getElementById("root");
// ReactDOM.render(heading, root);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);
