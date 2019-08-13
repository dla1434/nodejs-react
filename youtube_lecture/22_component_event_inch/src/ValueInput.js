import React, { Component } from 'react'

export default class ValueInput extends Component {
	constructor(props) {
		super(props)
		this.state = {
			 value: this.props.value
		}
	}

	//props가 변경되면 state의 props.value를 다시 설정하기 위한 라이프사이클
	componentWillReceiveProps (nextProps) {
		this.setState({value: nextProps.value})
	}
	
	render() {
		return (<div>
			<label>{this.props.title}: <br />
			<input  
				type="text"
				value={this.state.value}
				onChange={(e) => {
					//유효성 검사
					const v = e.target.value
					const newValue = v.replace(/[^0-9]+/g, '')
					this.setState({value: newValue})
					//이벤트 실행
					//컴포넌트에 onChange 속성이 있다면
						//ex) <ValueInput onChange={doChange} />
					if (this.props.onChange){
						//onChange를 실행해라..즉 doChange를 실행하라
						this.props.onChange({
							target: this,
							value: newValue
						})
					}
				}}
			/>
			</label>
		</div>
		);
	}
}

//위에서 export default class ValueInput로 대채했으므로..제거 해도 된다.
//export default ValueInput
