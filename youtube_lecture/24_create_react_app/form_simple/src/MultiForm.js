import React, { Component } from 'react';
import { SimpleForm } from './SimpleForm_0001';

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
			this.setState({
				[key]: value
			})
		}

		return (
			<form onSubmit={(e) => {
				window.alert( JSON.stringify(this.state) )
				e.preventDefault()
			}}>
				{/* this.state ==> this로 생략이 가능한 거 같다 */}
				<input name="name" value={this.name} onChange={doChange} /><br />
				<input name="age" value={this.age} onChange={doChange} /><br />
				<input name="value" value={this.hobby} onChange={doChange} /><br />
				<input type="submit" />
			</form>
		);
	}
}