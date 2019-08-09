import React, { Component } from 'react';

export class SimpleForm extends Component {
	constructor(props) {
		super(props)
		this.state = {
			value : ''
		}
	}

  render() {
    return (
      <form onSubmit={(e) => {
				window.alert('전송: ' + this.state.value)
				e.preventDefault()
			}}> 
				<input type="text" value={this.state.value} 
					onChange={(e) => {
						//e.target.value : 이벤트의 값을 추출할 수 있다.
						const curValue = e.target.value
						//replace(/[^0-9]/g, '')을 사용하여 숫자만 입력하게 처리
							//입력 시작값이 숫자가 아닌 거에 대해서 ''으로 치환되게 되는 로직으로 처리함
						const newValue = curValue.replace(/[^0-9]/g, '')
						this.setState({value: newValue})
					}}
				/>
				<input type="submit" />
			</form>
    );
  }
}