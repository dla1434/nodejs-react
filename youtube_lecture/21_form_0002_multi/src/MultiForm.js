import React, { Component } from 'react';

export class MultiForm extends Component {
	constructor(props) {
		super(props)
		this.state = {
			name: '',
			age: '',
			hobby: ''
		}
	}

	render () {
		const doChange = (e) => {
			const key = e.target.name
			const value = e.target.value
			console.log(key, value)
			//key:라고하면 그냥 문자열 key로 인식한다.
			//key의 값을 key로 지정하고 싶다면 []안에 넣어야 한다.
			this.setState({
				[key]: value
			})
		}

		//this.state ==> this로 생략이 가능한 거 같다
		//this.state == this.state.name이나 결과는 똑같은 듯..하나만 바꿔놨다.
		return (
			<form onSubmit={(e) => {
				window.alert( JSON.stringify(this.state) )
				e.preventDefault()
			}}>
				<input name="name" value={this.state.name} onChange={doChange} /><br />
				<input name="age" value={this.age} onChange={doChange} /><br />
				<input name="value" value={this.hobby} onChange={doChange} /><br />
				<input type="submit" />
			</form>
		);
	}
}