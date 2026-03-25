const fs =require("fs")

fs.mkdirSync("myfolder4")

fs.writeFileSync('myfolder4/data.txt','Hello Good Morning')

fs.appendFileSync('myfolder4/data.txt','\n new line added')
fs.readFileSync("myfolder4/data.txt")
fs.renameSync('myfolder4/data.txt','myfolder4/data4.txt')
fs.unlinkSync("myfolder4/data4.txt")
