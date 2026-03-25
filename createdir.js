const fs =require("fs")

//asyn
fs.mkdir("myfolder",(err)=>{
    if(err)throw err
    console.log("folder created")
   
})

//syn
fs.mkdirSync("myfolder1")
    console.log("folder created")
   


