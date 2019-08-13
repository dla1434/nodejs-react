import React, { Component } from 'react';

export class SimpleForm extends Component {
	constructor(props) {
		super(props)
		this.state = {
			value: ''
		}
	}

	render() {
		return (
			<form onSubmit={(e) => {
				window.alert('전송: ' + this.state.value)
				//submit 페이지 변경을 막아준다.
					//이 부분을 안 막으면..전송 버튼 클릭 후 페이지가 새로고침이 된다
					//ex) 입력된 값을 그대로 유지해서 보여주기 위해서 사용
				e.preventDefault()
			}}>
				<input type="text" value={this.state.value}
					onChange={(e) => {
						//e.target.value : 이벤트의 값을 추출할 수 있다.
						const curValue = e.target.value
						//replace(/[^0-9]/g, '')을 사용하여 숫자만 입력하게 처리
							//입력 시작값이 숫자가 아닌 거에 대해서 ''으로 치환되게 되는 로직으로 처리함
						const newValue = curValue.replace(/[^0-9]/g, '')
						this.setState({ value: newValue })
					}}
				/>
				<input type="submit" />
			</form>
		);
	}
}