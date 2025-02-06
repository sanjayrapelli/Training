import React, { Component } from "react";

class CBCPropEx1 extends Component {
  render() {
    console.log(this);
    return (
      <div>
        <h1>{this.props.username}</h1>
        <h2>{this.props.age}</h2>
        {this.props.hobbies.map((hobby) => {
          return <li>{hobby}</li>;
        })}
        <button onClick={this.props.sendFun}>click</button>
      </div>
    );
  }
}

export default CBCPropEx1;
