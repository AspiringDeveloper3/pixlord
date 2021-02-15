import React from "react";

function Slider(props) {
  return (
    <div>
      <input
        onChange={props.change}
        type="range"
        name=""
        id="slider"
        min="0"
        max="100"
      />
    </div>
  );
}

export default Slider;
