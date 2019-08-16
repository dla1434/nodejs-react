import React, { Component } from 'react'

//input.focus 기능을 사용하고 싶은데..그냥 사용할 수 없다.
//이 경우 ref 기능을 사용해야 한다.
export default class TestInput extends Component {
	constructor(props) {
		super(props)
		this.inputRef = React.createRef()
	}

	componentDidMount() {
		// Input 태그/Input 객체이기 때문에
			// Input이 가진 모든 것을 사용할 수 있게 된다.
			// ex) document.createElement("input").으로 접근 시 사용하는 객체
				//focus, blur 등...
		this.inputRef.current.focus()
		//아래 처럼 쓸 일은 없지만..테스트를 위해 적용해보자
		this.inputRef.current.style.color = "red"
	}
	
	//ref
	//기존 버전 : <input type="text" ref={(obj => { this.inputRef = obj})} />
	render() {
		return (<input type="text" ref={this.inputRef} />);
	}
}