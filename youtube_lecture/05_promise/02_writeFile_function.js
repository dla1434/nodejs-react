
const fs = require("fs")

fs.writeFile("test.txt", "Hello JavaScript", function(error){
	fs.readFile("test.txt", function(err, data){
		console.log(data.toString())
	})
})


fs.writeFile("test.txt", "Hello JavaScript", (error) => {
	fs.readFile("test.txt", (error, data) => {
		console.log(data.toString())
	})
})
