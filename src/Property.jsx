import React from "react";

function Property(props) {
  return (
    <div onClick = {props.click} className="prop">
      <h1>{props.text}</h1>
    </div>
  );
}

export default Property;
