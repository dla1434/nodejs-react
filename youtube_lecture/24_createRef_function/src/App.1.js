import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import TestInput from './TestInput.js';

//num="121"은 문자열로 넘어간다..number로 넘기고 싶다면..num{123}
//bool="true"은 문자열로 넘어간다..boolean로 넘기고 싶다면..bool{true}
//문자열도 원래대로라면 str={"asdasd"}이지만..문자열은 {} 생략이 가능하다.
class App extends Component {
	render() {
		return (
			<TestInput str="asdasd" num={121} bool={true} />
		);
	}
}

export default App;
