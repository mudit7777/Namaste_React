const heading = React.createElement(
  "h1",
  { id: "heading" },
  "Hello World from React"
);

const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement(
    "div",
    { id: "child" },
    React.createElement("h1", { id: "headingofChild" }, "I'm a h1 tag")
  )
);

console.log(parent);
// console.log(heading);
const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);
root.render(parent);
