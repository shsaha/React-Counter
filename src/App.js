import React, { Component } from 'react';
import './App.css';
import Counter from './components/Counter'

const title = "React-Counter"
class App extends React.Component {

  state = {
    count: 0
  }
  increaseCount = () => {
    this.setState({ count: this.state.count + 1 })
  }
  decreaseCount = () => {
    this.setState({ count: this.state.count - 1 })
  }
  reset = () => {
    this.setState({ count: 0 })
  }
  render() {
    return (
      <React.Fragment>
        <header className="App-header">
          <h1 className="App-title">{title}</h1>
        </header>
        <Counter increaseCount={this.increaseCount}
          decreaseCount={this.decreaseCount}
          reset={this.reset}
          count={this.state.count} />

      </React.Fragment>
    );
  }
}

export default App;
