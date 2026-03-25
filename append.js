 const fs =require("fs")

// //asyn
// fs.appendFile("data.txt","\n new line added",(err)=>{
//     if(err)throw err
//     console.log("line added succesfully")
   
// })

//sync
fs.appendFileSync("data.txt","\n new line added")
console.log("line added succesfully")
