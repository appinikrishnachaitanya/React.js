import React, { Component } from "react";

class CCEvent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "krishnachaitanya",
    };
  }

  changeUsername = () => {
    this.setState({ name: "chaitanya" });
  };

  render() {
    return (
      <div>
        <p>THis is class level component</p>
        <p>My name is {this.state.name}</p>
        <button onClick={this.changeUsername}>click me</button>
      </div>
    );
  }
}

export default CCEvent;
