import React, { Component } from "react";

class Counter extends Component {
  render() {
    return (
      <div className="row">
        <div className="col-1">
          <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        </div>

        <div className="col mb-4">
          <button
            className="btn btn-secondary "
            onClick={() => this.props.onIncrement(this.props.counter)}
          >
            +
          </button>

          <button
            className="btn btn-secondary  ml-4"
            onClick={() => this.props.onDecrement(this.props.counter)}
            disabled={!this.props.counter.value}
          >
            -
          </button>

          <button
            className="btn btn-danger ml-4"
            onClick={() => this.props.onDelete(this.props.counter.id)}
          >
            X
          </button>
        </div>
      </div>
    );
  }

  getBadgeClasses() {
    let classes = "badge  mx-4 p-2 badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { value } = this.props.counter;
    return value === 0 ? "Zero" : value;
  }
}

export default Counter;
