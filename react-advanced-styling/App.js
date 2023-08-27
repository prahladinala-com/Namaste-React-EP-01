const username = React.createElement("h1", {}, "Prahlad Inala 🚀");
const aboutText = React.createElement(
  "h5",
  {},
  "I am a web developer with a passion for building modern web applications."
);
const header = React.createElement(
  "header",
  { className: "container mt-5" },
  React.createElement("div", { className: "text-center" }, [
    username,
    aboutText,
  ])
);

const socials = React.createElement("section", { className: "row" }, [
  React.createElement("h4", {}, "Socials"),
  [
    React.createElement(
      "div",
      { className: "col" },
      React.createElement(
        "a",
        {
          href: "https://www.linkedin.com/in/prahladinala/",
          className: "text-decoration-none",
          target: "_blank",
        },
        React.createElement(
          "div",
          { className: "card text-dark mt-3 text-center" },
          React.createElement(
            "div",
            { className: "card-body" },
            React.createElement(
              "h4",
              { className: "text-monospace" },
              "LinkedIn"
            )
          )
        )
      )
    ),
    React.createElement(
      "div",
      { className: "col" },
      React.createElement(
        "a",
        {
          href: "https://www.linkedin.com/in/prahladinala/",
          className: "text-decoration-none",
          target: "_blank",
        },
        React.createElement(
          "div",
          { className: "card text-dark mt-3 text-center" },
          React.createElement(
            "div",
            { className: "card-body" },
            React.createElement(
              "h4",
              { className: "text-monospace" },
              "Instagram"
            )
          )
        )
      )
    ),
    React.createElement(
      "div",
      { className: "col" },
      React.createElement(
        "a",
        {
          href: "https://www.linkedin.com/in/prahladinala/",
          className: "text-decoration-none",
          target: "_blank",
        },
        React.createElement(
          "div",
          { className: "card text-dark mt-3 text-center" },
          React.createElement(
            "div",
            { className: "card-body" },
            React.createElement(
              "h4",
              { className: "text-monospace" },
              "Twitter"
            )
          )
        )
      )
    ),
  ],
]);

const projects = React.createElement("section", { className: "row mt-5" }, [
  React.createElement("h4", {}, "Projects"),
  [
    React.createElement(
      "div",
      { className: "col" },
      React.createElement(
        "a",
        {
          href: "https://toolmate.co.in",
          className: "text-decoration-none text-dark",
          target: "_blank",
        },
        React.createElement(
          "div",
          { className: "card" },
          React.createElement("img", {
            src: "https://images.pexels.com/photos/13847596/pexels-photo-13847596.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            className: "card-img-top",
            alt: "ToolMate",
          }),
          React.createElement(
            "div",
            {
              className: "card-body",
            },
            [
              React.createElement(
                "h5",
                { className: "card-title" },
                "ToolMate"
              ),
              React.createElement(
                "p",
                { className: "card-text" },
                "A simple tool platform for all your tool needs"
              ),
            ]
          )
        )
      )
    ),
    React.createElement(
      "div",
      { className: "col" },
      React.createElement(
        "a",
        {
          href: "https://toolmate.co.in",
          className: "text-decoration-none text-dark",
          target: "_blank",
        },
        React.createElement(
          "div",
          { className: "card" },
          React.createElement("img", {
            src: "https://images.pexels.com/photos/13847596/pexels-photo-13847596.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            className: "card-img-top",
            alt: "ToolMate",
          }),
          React.createElement(
            "div",
            {
              className: "card-body",
            },
            [
              React.createElement(
                "h5",
                { className: "card-title" },
                "ToolMate"
              ),
              React.createElement(
                "p",
                { className: "card-text" },
                "A simple tool platform for all your tool needs"
              ),
            ]
          )
        )
      )
    ),
    React.createElement(
      "div",
      { className: "col" },
      React.createElement(
        "a",
        {
          href: "https://toolmate.co.in",
          className: "text-decoration-none text-dark",
          target: "_blank",
        },
        React.createElement(
          "div",
          { className: "card" },
          React.createElement("img", {
            src: "https://images.pexels.com/photos/13847596/pexels-photo-13847596.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            className: "card-img-top",
            alt: "ToolMate",
          }),
          React.createElement(
            "div",
            {
              className: "card-body",
            },
            [
              React.createElement(
                "h5",
                { className: "card-title" },
                "ToolMate"
              ),
              React.createElement(
                "p",
                { className: "card-text" },
                "A simple tool platform for all your tool needs"
              ),
            ]
          )
        )
      )
    ),
  ],
]);

const App = React.createElement("div", { className: "container mt-5" }, [
  header,
  socials,
  projects,
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(App);
