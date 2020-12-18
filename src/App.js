import React from "react";
import Counters from "./components/counters";
import NavBar from "./components/navbar";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counters: [
        { value: 4, id: 0 },
        { value: 1, id: 1 },
        { value: 0, id: 2 },
        { value: 0, id: 4 },
      ],
    };
  }

  handleIncrement = (counter) => {
    const { counters } = this.state;
    const index = counters.indexOf(counter);
    counters[index].value++;
    this.setState({ counters });
  };

  handleDelete = (id) => {
    const counters = this.state.counters.filter((c) => c.id !== id);
    this.setState({ counters });
  };

  handleReset = () => {
    const counters = this.state.counters.map((c) => {
      c.value = 0;
      return c;
    });
    this.setState({ counters });
  };

  render() {
    return (
      <React.Fragment>
        <NavBar
          totalNumber={this.state.counters.filter((c) => c.value > 0).length}
        />
        <main className="container">
          <Counters
            counters={this.state.counters}
            onReset={this.handleReset}
            onIncrement={this.handleIncrement}
            onDelete={this.handleDelete}
          />
        </main>
      </React.Fragment>
    );
  }
}
