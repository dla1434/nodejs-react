
//제너레이터 함수
function * counter() {
	yield 1
	yield 2
	yield 3
	return 1
}

genratorObject = counter()
console.log(genratorObject.next())
console.log(genratorObject.next())
console.log(genratorObject.next())
console.log(genratorObject.next())
console.log(genratorObject.next())

