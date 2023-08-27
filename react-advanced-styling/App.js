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
          href: "https://www.instagram.com/prahlad.inala/",
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
          href: "https://www.twitter.com/prahladinala/",
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
      { className: "col my-2" },
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
            src: "https://images.pexels.com/photos/2756842/pexels-photo-2756842.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
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
      { className: "col my-2" },
      React.createElement(
        "a",
        {
          href: "https://ui.toolmate.co.in",
          className: "text-decoration-none text-dark",
          target: "_blank",
        },
        React.createElement(
          "div",
          { className: "card" },
          React.createElement("img", {
            src: "https://images.pexels.com/photos/5054776/pexels-photo-5054776.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            className: "card-img-top",
            alt: "ToolMate UI",
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
                "ToolMate UI"
              ),
              React.createElement(
                "p",
                { className: "card-text" },
                "A Tailwind CSS UI Kit for Developers and Designers"
              ),
            ]
          )
        )
      )
    ),
    React.createElement(
      "div",
      { className: "col my-2" },
      React.createElement(
        "a",
        {
          href: "https://blog.toolmate.co.in",
          className: "text-decoration-none text-dark",
          target: "_blank",
        },
        React.createElement(
          "div",
          { className: "card" },
          React.createElement("img", {
            src: "https://images.pexels.com/photos/7775641/pexels-photo-7775641.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            className: "card-img-top",
            alt: "ToolMate Blog",
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
                "ToolMate Blog"
              ),
              React.createElement(
                "p",
                { className: "card-text" },
                "A simple blog platform for technical content and knowledge sharing"
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
