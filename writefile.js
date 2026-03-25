const fs =require("fs")

// //asyn
// fs.writeFile("data.txt","hello word",(err)=>{
//     if(err)throw err
//     console.log("file writen succesfully")
   
// })

//syn
fs.writeFileSync("data1.txt","hello word")
    console.log("file writen succesfully")
   

