import React, { Component } from "react";

class CCState extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "krishnachaitanya",
      age: 21,
    };
  }

  render() {
    return (
      <div>
        <p>
          My name is {this.state.name} and age is {this.state.age}
        </p>
      </div>
    );
  }
}

export default CCState;
