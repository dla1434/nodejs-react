import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class TestInput extends Component {
	constructor(props) {
		super(props)
		console.log(typeof props.num, props.num)
		console.log(typeof props.bool, props.bool)
	}
	
	render() {
		return (<h1>Test Input</h1>);
	}
}

//props를 받을때 해당 props을 아래 정의한 변수 타입과 비교하여 다르면 에러를 발생시켜준다.
//필수 필드의 경우 PropTypes.string 뒤에 isRequired를 붙여준다.
TestInput.PropTypes = {
	str: PropTypes.string.isRequired,
	num: PropTypes.number,
	bool: PropTypes.bool
}

//props를 받을때 기본값을 지정할 수 있다.
	//ex) <TestInput /> 이렇게 props를 하나도 지정하지 않아도 기본 props가 설정된다.
TestInput.defaultProps = {
	str: "",
	num: 273,
	bool: true
}

