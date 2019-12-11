import React, { useState } from "react";
import ReactDOM from "react-dom";

import "./styles.css";

function App() {
  const [input, setInput] = useState("");
  const [color, setColor] = useState("light");
  const [btnColor, setbtnColor] = useState({ backgroundColor: "white" });
  const [inpStyle, setinpStyle] = useState({ color: "black" });
  const [btnStyle, setbtnStyle] = useState({ backgroundColor: "#f0f0f0" });

  const calcBtns = [];
  [9, 8, 7, 6, 5, 4, 3, 2, 1, 0, ".", "%"].forEach(item => {
    calcBtns.push(
      <button
        style={btnStyle}
        onClick={e => {
          setInput(input + e.target.value);
        }}
        value={item}
        key={item}
      >
        {" "}
        {item}
      </button>
    );
  });

  function handleClick() {}

  return (
    <div style={btnColor}>
      <div className="wrapper">
        {" "}
        <div className="text-center" style={{ color: "black" }}>
          {" "}
          <button
            // style={{ backgroundColor: { color } }}
            onClick={() => {
              if (color == "light") {
                setColor("dark");
                setbtnColor({ backgroundColor: "black" });
                setinpStyle({ color: "white" });
                setbtnStyle({ backgroundColor: "#666" });
              } else {
                setColor("light");
                setbtnColor({ backgroundColor: "white" });
                setinpStyle({ color: "black" });
                setbtnStyle({ backgroundColor: "#f0f0f0" });
              }
              console.log(color);
            }}
          >
            {" "}
            Change Theme{" "}
          </button>{" "}
        </div>
        <div className="show-input" style={inpStyle}>
          {input}
        </div>
        <div className="digits flex">{calcBtns}</div>
        <div className="modifiers subgrid">
          {/* clear button */}

          <button onClick={() => setInput(input.substr(0, input.length - 1))}>
            Delete
          </button>

          {/* clear all */}
          <button onClick={() => setInput("")} value="">
            AC
          </button>
        </div>
        <div className="operations subgrid">
          {/* add button */}
          <button onClick={e => setInput(input + e.target.value)} value="+">
            +
          </button>

          {/* minus btn */}
          <button onClick={e => setInput(input + e.target.value)} value="-">
            {" "}
            -{" "}
          </button>

          <button onClick={e => setInput(input + e.target.value)} value="*">
            {" "}
            *
          </button>

          <button onClick={e => setInput(input + e.target.value)} value="/">
            {" "}
            /
          </button>
          {/* "=" btn */}
          <button
            onClick={e => {
              try {
                setInput(
                  String(eval(input)).length > 3 &&
                    String(eval(input)).includes(".")
                    ? String(eval(input).toFixed(4))
                    : String(eval(input))
                );
              } catch (e) {
                console.log(e);
              }
            }}
            value="="
          >
            =
          </button>
        </div>
      </div>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
