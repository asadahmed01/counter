import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  render() {
    const {
      onReset,
      onIncrement,
      onDelete,
      counters,
      onDecrement,
    } = this.props;
    return (
      <div>
        <button
          className="btn btn-secondary ml-5 my-4"
          onClick={this.props.onReset}
        >
          Reset
        </button>
        {counters.map((c) => {
          return (
            <div>
              <Counter
                key={c.id}
                counter={c}
                onDelete={onDelete}
                onIncrement={onIncrement}
                onReset={onReset}
                onDecrement={onDecrement}
              />
            </div>
          );
        })}
      </div>
    );
  }
}

export default Counters;
