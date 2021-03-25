import React from "react";
import ThemeContext from "./context";
import "./useContext.css";

const Child = () => {
  const { color, setColor } = React.useContext(ThemeContext);

  const handleClick = () => {
    setColor(color === "light" ? "dark" : "light");
  };

  return (
    <div className="toggle" onClick={handleClick}>
      <span>Switch: {color === "dark" ? "🌞 " : "🌑"}</span>
    </div>
  );
};

const Parent = () => {
  return (
    <div>
      <div className="quote">
        “Context provides a way to pass data through the component tree without
        having to pass props down manually at every level.”
      </div>
      <Child />
    </div>
  );
};

const GrandParent = () => {
  const { color } = React.useContext(ThemeContext);
  return (
    <main className={color === "light" ? "light" : "dark"}>
      <h1>Context API</h1>
      <Parent />
    </main>
  );
};
export default function UseContext() {
  const [color, setColor] = React.useState("light");
  const data = { color, setColor };
  return (
    <ThemeContext.Provider value={data}>
      <GrandParent />
    </ThemeContext.Provider>
  );
}
