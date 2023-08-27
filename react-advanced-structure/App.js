const username = React.createElement("h1", {}, "Prahlad Inala");
const title = React.createElement("h2", {}, "Web Developer");

const header = React.createElement("header", {}, [username, title]);

const aboutText = React.createElement(
  "p",
  {},
  "I am a web developer with a passion for building modern web applications."
);

const about = React.createElement("section", { className: "about" }, aboutText);
const itemTitle = React.createElement("h3", {}, "ToolMate");
const itemDescription = React.createElement(
  "p",
  {},
  "A simple tool platform for all your tool needs"
);
const itemLink = React.createElement(
  "a",
  { href: "https://toolmate.co.in", target: "_blank" },
  "View Project"
);

const portfolio = React.createElement("div", { className: "portfolio-item" }, [
  itemTitle,
  itemDescription,
  itemLink,
]);

const App = React.createElement("div", { className: "app" }, [
  header,
  about,
  portfolio,
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(App);
