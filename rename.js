const fs =require("fs")

fs.rename("data.txt","data3.txt",(err)=>{
    if(err) throw error
    console.log("line added succesfully")
})
