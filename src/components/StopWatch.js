import React, {Component} from 'react';


export class StopWatch extends Component {
  state = {
    isRunning: false,
    timer: 0
  };
  
  componentDidMount() {
    this.tickRef = setInterval(this.tick, 1000);
  };
  
  componentWillUnmount() {
    clearInterval(this.tickRef);
  };
  
  tick = () => {
    if (this.state.isRunning) {
      this.setState(prevState => ({timer: prevState.timer + 1}))
    }
  };

  handleStopWatch = () => {
    this.setState(prevState => ({isRunning: !prevState.isRunning}))
  };

  handleReset = () => {
    this.setState({timer: 0});
  };

  render() {
    return (
      <div>
        <h2>Stop Watch</h2>
        <span className="stopwarch-time">{this.state.timer}</span>
        <button onClick={this.handleStopWatch}>{this.state.isRunning ? 'stop' : 'start'}</button>
        <button onClick={this.handleReset}>reset</button>
      </div>
    )
  }
} 