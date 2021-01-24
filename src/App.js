import {useState} from "react";
// import styled from "styled-components";
import "./App.css";

const styles = {
  bold: {fontWeight: "bold"},
  italic: {fontStyle: "italic"},
  underline: {textDecorationLine: "underline"},
};

const stylings = ["bold", "italic", "underline"];
const colors = ["yellow", "blue", "red", "black", "purple"];

function App() {
  const [textColor, setTextColor] = useState("Black");
  const [textStyle, setTextStyle] = useState("");
  
  const stylingBoxes = stylings.map((style) => (
    <button className="btn btn-light" style={styles[style]} key={style} onClick={()=> setTextStyle(style)}>
      {style}
    </button>
  ));

  const colorBoxes = colors.map((color) => (
    <button
      style={{ backgroundColor: color, height: 30, width: 30 }}
      key={color}
      onClick={()=> setTextColor(color)}
    />
  ));

  return (
    <div className="App">
      <div className="my-3">{stylingBoxes}</div>
      <textarea style={{color: textColor}}/> 
      <div className="my-3">{colorBoxes}</div>
    </div>
  );
}

//styles[textStyle]
export default App;
