import React from "react";
import Counter from "./counter";

export default class Counters extends React.Component {
  render() {
    const { onReset, counters, onDelete, onIncrement } = this.props;

    return (
      <React.Fragment>
        <button className="btn btn-primary btn-sm m-1" onClick={onReset}>
          Reset
        </button>
        {counters.map((counter) => (
          <Counter
            key={counter.id}
            counter={counter}
            onIncrement={onIncrement}
            onDelete={onDelete}
          />
        ))}
      </React.Fragment>
    );
  }
}
