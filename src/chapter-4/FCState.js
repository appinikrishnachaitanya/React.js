import React from "react";
import { useState } from "react";

function FCState() {
  const [name, setname] = useState("krishnachaitanya");

  return (
    <div>
      <h1>THis is state component</h1>
      <p>my name is {name}</p>
    </div>
  );
}

export default FCState;
