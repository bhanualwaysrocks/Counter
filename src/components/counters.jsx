import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  render() {
    return (
      <div>
        <button
          onClick={this.props.onReset}
          className="btn btn-primary btn-sm m-2"
        >
          Reset
        </button>
        <div className="container">
          {this.props.counters.map((c) => (
            <Counter
              key={c.id}
              counter={c}
              onDelete={this.props.onDelete}
              onIncrement={this.props.onIncrement}
              onDecrement={this.props.onDecrement}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default Counters;
