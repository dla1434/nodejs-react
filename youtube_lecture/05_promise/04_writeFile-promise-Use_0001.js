const fs = require("fs")

new Promise((resolve) => {
	resolve(10)
}).then((value) => {
	console.log(value)
	return 20
}).then((value) => {
	console.log(value)
	return 30
})