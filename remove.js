const fs =require("fs")

//asyn
fs.rmdir("myfolder",(err)=>{
    if(err)throw err
    console.log("folder remove")
   
})

//syn
fs.rmdirSync("myfolder1")
    console.log("folder remove")
   