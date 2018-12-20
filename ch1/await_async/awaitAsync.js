const fs = require("fs")

async function readAll(){
	const a = await read("test_2.txt")
	console.log(a)
	const b = await read("test_2.txt")
	console.log(b)
	const c = await read("test_2.txt")
	console.log(c)
}
readAll()

//방법2 - 함수 선언과 동시에 호출
// (async function () {
// 	const a = await read("test_2.txt")
// 	console.log("함수 바로 호출", a)
// 	const b = await read("test_2.txt")
// 	console.log("함수 바로 호출", b)
// 	const c = await read("test_2.txt")
// 	console.log("함수 바로 호출", c)
// })()

function read(filename){
	return new Promise((resolve) => {
		fs.readFile("test_2.txt", (error, data) => {
			resolve(data.toString())
		})
	})
}



