
function * counter() {
	yield 1
	yield 2
	yield 3
	//아래 for문 처럼 처리되므로..return이 호출되어 사용되는 경우는 거의 없을 것이다.
	// return 1
}

genratorObject = counter()

for(const value of genratorObject){
	console.log(value)
}