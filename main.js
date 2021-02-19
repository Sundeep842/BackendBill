const fs = require("fs")
let data=""
const readerStream = fs.createReadStream("input.txt")

readerStream.setEncoding('UTF8')
readerStream.on('data',function(chunk){
    data =data + chunk
})
readerStream.on('end',function(){
    console.log(data)
})

readerStream.on('error',function(){
    console.log(err.stack)
})

console.log("Program Ended")