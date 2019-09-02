
//기본적인 함수 사용 시 
function normal_counter() {
	return 1
}

value = normal_counter()
console.log(value)

//제너레이터 함수 사용 시 
	//fuction과 function명 사이에 *를 넣으면 제너레이터로 인식
function * gen_counter() {
	return 1
}

genratorObject = gen_counter()
//위에 기본 함수와는 다르게 리턴값이 1이 아닌 Object [Generator] {} 객체가 반환됐다.
console.log(genratorObject)
//GeneratorFunction {}이 반환된다.
console.log(genratorObject.constructor)
