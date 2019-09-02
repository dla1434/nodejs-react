
function * counter() {
	//시작부분부터 순차적으로 시작된다.
	yield 1
	yield 2
	yield 3
	return 1
}

genratorObject = counter()
//{ value: 1, done: false }
	//value가 yield에서 지정한 값
	//done : 더 처리가 할 게 있다면 false, 마지막이라면 true
console.log(genratorObject.next())
console.log(genratorObject.next())
console.log(genratorObject.next())
console.log(genratorObject.next())

//{ value: undefined, done: true }
	//next()를 초과하게 되도 에러는 발생하지 않지만..value에 undefined가 들어가게 됩니다.
console.log(genratorObject.next())



