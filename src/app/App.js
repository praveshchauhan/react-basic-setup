import React from 'react';

class App extends React.Component {
  constructor() {
    super();
    this.state = { text: 'Increasing value in every 2 secs', counter : 0}
  }
  componentDidMount() {
    setInterval(() => {
      //this.incCounter()
      this.setState({counter: this.state.counter + 1});
    }, 1000);
  }
  incCounter(){
    this.setState({counter: this.state.counter + 1});
  }
  render() {
    return (
      <div>{this.state.text} {this.state.counter}</div>
    )
  }
}

export default App;
