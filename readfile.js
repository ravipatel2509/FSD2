//using tostring()
const fs =require("fs")

//asyn
// fs.readFile("data.txt",(err,data)=>{
//     if(err)throw err
//     console.log(data.toString())//decimal into string
//     console.log(data)
// })

//sync
// const data=fs.readFileSync("data.txt")
// console.log(data.toString())//show the actuall data

//UTF8
 fs.readFile("data.txt","Utf-8",(err,data)=>{//utf -8 encode to decode means decimal to string
     if(err)throw err
    console.log(data) })