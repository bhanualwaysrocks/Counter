import { getByPlaceholderText } from "@testing-library/react";
import React, { Component } from "react";

class Counter extends Component {
  // state = {
  //     count: 0,
  //  }

  // handleIncrement = () => {
  //     this.setState({ count : this.state.count + 1});
  // }

  render() {
    return (
      <div>
        <span className={this.getClasses()}>{this.formatCount()}</span>
        <button
          onClick={() => this.props.onIncrement(this.props.counter)}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
        <button
          onClick={() => this.props.onDelete(this.props.counter)}
          className="btn btn-danger btn-sm m-2"
        >
          Delete
        </button>
      </div>
    );
  }

  formatCount() {
    const { value } = this.props.counter;
    return value === 0 ? "Zero" : value;
  }

  getClasses() {
    let Classes = "badge m-2 badge-";
    Classes += this.props.counter.value === 0 ? "warning" : "primary";
    return Classes;
  }
}

export default Counter;
