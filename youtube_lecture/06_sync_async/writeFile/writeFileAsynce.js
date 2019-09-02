const fs = require("fs")

fs.writeFile("test_2.txt", "Hello Javascript", function (error){
	fs.readFile("test_2.txt", function (error, data) {
		console.log(data.toString())
	})
})


