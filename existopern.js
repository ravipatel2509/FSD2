const fs =require("fs")
if(!fs.existsSync("myfolder4")){
fs.mkdir("myfolder4",(err)=>{
    if(err)throw err
    console.log("folder created")
})
}else{
console.log("folder already exist")
}