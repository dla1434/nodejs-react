import React, { Component } from 'react'

export default class TestInput extends Component {
	constructor(props) {
		super(props)
		console.log(typeof props.num)
		console.log(typeof props.bool)
	}
	
	render() {
		return (<h1>Test Input</h1>);
	}
}