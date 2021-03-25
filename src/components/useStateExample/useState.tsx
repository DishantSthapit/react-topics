import React from "react";
import './useState.css';


export default function UseState() {
  const [visible, setVisible] = React.useState<boolean>(false);
  return (
    <div className="App">
      <h2>Switch to :</h2>
      <button className="state-button " onClick={() => setVisible(!visible)}>
        {visible ? "Unvisible" : "Visible"}
      </button>
      {visible && (
        <div className="visible">
          <img className='state-img' src="https://www.freecodecamp.org/news/content/images/2020/02/Ekran-Resmi-2019-11-18-18.08.13.png" />
          <span className='state-span'>
            useState is a Hook that lets you add React state to function
            components.
          </span>
        </div>
      )}
    </div>
  );
}
