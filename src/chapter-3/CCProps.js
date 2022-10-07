import React, { Component } from "react";

class CCProps extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1>my name is {this.props.name}</h1>
      </div>
    );
  }
}

export default CCProps;
