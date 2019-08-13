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

	tick() {
		if (this.state.isLive) {
			this.setState({
				curTime: new Date().getTime()
			})
		}
	}

  render() {
		let label = 'Start'
		if(this.state.isLive){
			label = 'Stop'
		}
    return (
      <div>
				<div>{this.state.curTime - this.state.startTime}</div>
				<button onClick={(e) => {
					if (this.state.isLive) {
						//동작되고 있다면 STOP
						this.setState({
							isLive: false
						})
					}
					else{
						//미동작되고 있다면 START
						const currentTime = new Date().getTime()
						this.setState({
							isLive: true,
							curTime: currentTime,
							startTime: currentTime
						})
					}
				}}>{label}</button>
			</div>
    );
  }
}

export default StopWatch;
