const EventEmitter=require("events")
const ee=new EventEmitter()
ee.on("start",()=>{
    console.log("started")
})
ee.emit("start")
//It is used trigger the event