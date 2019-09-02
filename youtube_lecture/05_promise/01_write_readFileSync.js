
const fs = require("fs")

fs.writeFileSync("test.txt", "Hello JavaScript1")

const content = fs.readFileSync("test.txt").toString()
console.log(content)