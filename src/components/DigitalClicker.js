// Code DigitalClicker Component Here
import React, { Component } from 'react';

export default class DigitalClicker extends Component {
  constructor() {
    super()
    this.state = {
      timesClicked: 0
    }
  }

  handleClick = () => {
    this.setState((state) => {
      return {timesClicked: state.timesClicked + 1}
    }, console.log(this.state));
  }

  render() {
    return (
      <button onClick={this.handleClick} value={this.state.timesClicked}>{this.state.timesClicked}</button>
    );
  }

}
