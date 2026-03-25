const EventEmitter=require("events")
const fs=require("fs")
const ee=new EventEmitter()
//writefile
ee.on("write",function(){
    fs.writeFile("b.txt","Hello",(err)=> {
        if(err)throw err
        console.log("data written")
        ee.emit("append")
    })
})
//append
// ee.on("append",function(){
//     fs.appendFile("b.txt","GM!",(err)=>{
//         if(err) throw err
//         console.log("Appended")
//     })
// })
// ee.emit("write")

ee.on("append",function(){
    fs.readFile("b.txt","utf-8",(err)=>{
        if(err) throw err
        console.log("read the data")
        return
    })
})
ee.emit("write")