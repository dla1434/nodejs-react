const fs = require("fs")

console.log("point a")
fs.writeFile("test_2.txt", "Hello Javascript", function (error){
	console.log("point b")
	fs.readFile("test_2.txt", (error, data) => {
		console.log("point c")
		console.log(data.toString())
	})
	console.log("point d")
})
console.log("point e")

/* 결과
point a
point e
point b
point d
point c
Hello Javascript
*/


