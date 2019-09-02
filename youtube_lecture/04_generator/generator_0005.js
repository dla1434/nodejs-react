const fs = require("fs")

const generator = (function * (){
	const a = yield read(generator, "test_2.txt")
	console.log(a)
	const b = yield read(generator, "test_2.txt")
	console.log(b)
	const c = yield read(generator, "test_2.txt")
	console.log(c)
})()
generator.next()

function read(generator, filename){
	fs.readFile(filename, (error, data) => {
		generator.next(data.toString())
	})
}