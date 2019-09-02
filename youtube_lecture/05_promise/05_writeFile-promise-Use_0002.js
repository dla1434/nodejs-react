const fs = require("fs")

new Promise((resolve) => {
	fs.readFile("test_2.txt", (error, data) => {
		resolve(data.toString())
	})
}).then((value) => {
	console.log(value)
	return 20
})


function read(filename){
	return new Promise((resolve) => {
		fs.readFile("test_2.txt", (error, data) => {
			resolve(data.toString())
		})
	})
}

read("test_2.txt").then((value) => {
	console.log(value)
})