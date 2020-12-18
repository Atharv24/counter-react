import React from "react";

export default class Counter extends React.Component {
  formatValue() {
    const { value } = this.props.counter;
    return value === 0 ? "Zero" : value;
  }

  getBadgeClasses() {
    let classes = "badge m-1 badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }

  render() {
    return (
      <div>
        <button
          className="btn btn-secondary btn-sm m-1"
          onClick={() => this.props.onIncrement(this.props.counter)}
        >
          Increment
        </button>
        <button
          className="btn btn-danger btn-sm m-1"
          onClick={() => this.props.onDelete(this.props.counter.id)}
        >
          Delete
        </button>
        <span className={this.getBadgeClasses()}>{this.formatValue()}</span>
      </div>
    );
  }
}
