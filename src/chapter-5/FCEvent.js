import React from "react";
import { useState } from "react";
function FCEvent() {
  const [username, setUsername] = useState("k123");

  function changeUsername() {
    setUsername("krishna123");
  }

  return (
    <div>
      <p>This is FCEvent</p>
      <p>username is {username} </p>
      <button onClick={changeUsername}>Click me</button>
    </div>
  );
}

export default FCEvent;
