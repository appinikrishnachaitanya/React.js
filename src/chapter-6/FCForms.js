import React from "react";
import { useState } from "react";
function FCForms() {
  const [username, setusername] = useState("");

  function getUsername(e) {
    e.preventDefault();
    alert(username);
  }

  return (
    <div>
      <h1>This is Functional Component</h1>
      <form action="" method="">
        Name:<br></br>
        <input
          type="text"
          name="username"
          value={username}
          placeholder="Username"
          onChange={(e) => {
            setusername(e.target.value);
          }}
        />
      </form>
      <button type="submit" onClick={getUsername}>
        Submit
      </button>
    </div>
  );
}

export default FCForms;
