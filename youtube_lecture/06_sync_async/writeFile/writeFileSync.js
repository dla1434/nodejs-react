const fs = require("fs")

fs.writeFileSync("test.txt", "Hello Javascript")

const content = fs.readFileSync("test.txt").toString()
console.log(content)
