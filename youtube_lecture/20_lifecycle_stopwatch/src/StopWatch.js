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
		console.log("componentWillMount Start")
		this.timerId = setInterval(e => { this.tick() }, 1000)
		console.log("componentWillMount End")
	}

	componentWillUnmount() {
		console.log("componentWillUnmount Start")
		clearInterval(this.timerId)	
	}

	tick() {
		console.log("tick")
		if (this.state.isLive) {
			this.setState({
				curTime: new Date().getTime()
			})
		}
	}

	// 타이머 형식으로 출력되게 처리하는 메소드
  getDisp () {
    const s = this.state
    const delta = s.curTime - s.startTime
    const t = Math.floor(delta / 1000)
    const ss = t % 60
    const m = Math.floor(t / 60)
    const mm = m % 60
    const hh = Math.floor(mm / 60)
    const z = (num) => {
      const s = '00' + String(num)
      return s.substr(s.length - 2, 2)
    }
    return <span className='disp'>
      {z(hh)}:{z(mm)}:{z(ss)}
    </span>
  }

  render() {
		let label = 'Start'
		if(this.state.isLive){
			label = 'Stop'
		}
    return (
      <div>
				{/* <div>{this.state.curTime - this.state.startTime}</div> */}
				<div>{this.getDisp()}</div>
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
