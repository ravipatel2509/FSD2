const EventEmitter=require("events")
const ee=new EventEmitter()
ee.on("connection",function(){
    console.log("connection done")
    ee.emit("data")
})
ee.on("data",function(){
    console.log("data-rececived")
})
ee.emit("connection")
console.log("thank you")