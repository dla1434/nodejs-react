import React, { Component } from 'react';

class StopWatch extends Component {
	constructor (props) {
		super(props)
		this.state = {
			isLive: false,
			curTime: 0,
			startTime: 0
		}
		this.timerId = 0
	}

	componentWillMount() {
		this.timerId = setInterval(e => { this.tick() }, 1000)
	}

	componentWillUnmount() {
		clearInterval(this.timerId)	
	}

  render() {
    return (
      <h1>Hello World</h1>
    );
  }
}

export default StopWatch;
