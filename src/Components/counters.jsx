import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  render() {
    return (
      <div>
        <button
          className="btn btn-secondary ml-5 mt-4"
          onClick={this.props.onReset}
        >
          Reset
        </button>
        {this.props.counters.map((c) => {
          return (
            <div>
              <Counter
                key={c.id}
                counter={c}
                onDelete={this.props.onDelete}
                onIncrement={this.props.onIncrement}
              />
            </div>
          );
        })}
      </div>
    );
  }
}

export default Counters;
