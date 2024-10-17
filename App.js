import React from "react";
import ReactDOM from "react-dom/client";

const heading = React.createElement("h1", { id: "heading" }, "Mudit💥");
const Title = () => (
  <div>
    <h1 className="titleComponent">this is Title Component</h1>
  </div>
);
const element = <h1> {heading} Element in swwweact </h1>;
const ComponentOne = () => (
  <div>
    {element}
    <Title /> {element}
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<ComponentOne />);
