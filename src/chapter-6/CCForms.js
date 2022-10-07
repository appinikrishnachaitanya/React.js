import React, { Component } from "react";

class CCForms extends React.Component {
  constructor() {
    super();
    this.state = {
      username: "",
    };
  }

  changeUsername = (e) => {
    e.preventDefault();
    alert(this.state.username);
  };

  render() {
    return (
      <div>
        <h1>THis is class component</h1>
        <form>
          Name:<br></br>
          <input
            type="text"
            name="username"
            value={this.state.username}
            placeholder="username"
            onChange={(e) => {
              this.setState({ username: e.target.value });
            }}
          ></input>
          <button type="submit" onClick={this.changeUsername}>
            Clickme
          </button>
        </form>
      </div>
    );
  }
}

export default CCForms;
