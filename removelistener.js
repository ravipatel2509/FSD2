const EventEmitter=require("events")
const eventemitter=new EventEmitter()
var fun1=(msg)=>{
    console.log("Message from fun1:"+msg)
}
var fun2=(msg)=>{
    console.log("message from fun2:"+msg)
}

//register event
eventemitter.on("myEvent1",fun1)
eventemitter.on("myEvent2",fun2)
eventemitter.on("myEvent1",fun1)
eventemitter.on("myEvent2",fun2)

eventemitter.emit("myEvent2","LJU")
eventemitter.emit("myEvent1","xyz")


console.log("myEvent1",eventemitter.listenerCount("myEvent1"))
console.log("myEvent2",eventemitter.listenerCount("myEvent2"))