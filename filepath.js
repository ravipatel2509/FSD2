const fs=require("fs")
const path=require("path")
let oldpath="lj/sample.txt"
let dir=path.dirname(oldpath)
let fileName=path.basename(oldpath)
let newFilePath=dir+"/"+fileName

//s-1 create a dir
fs.mkdir(dir,(err)=>{
    if(err)throw err
console.log("directory created",dir)


//s-2 create original file

fs.writeFile(newFilePath,"sample data for tile",(err)=>
{
    if(err)throw err
    console.log("original file created",newFilePath)

})
})

//copy
fs.copyFile(newFilePath,dir+"/s1.txt",(err)=>
    {
        if(err)throw err
        console.log("file copied to temp.txt")

    //delete
        
    fs.unlink(newFilePath,(err)=>
        {
            if(err)throw err
            console.log("original file is deleted")
            console.log("all opern completed succesfully")
        
        })
    })