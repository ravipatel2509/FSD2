var ps=require("fs")

ps.writeFileSync("s1.txt","50-1 99 3 4 6 8 10")
data = ps.readFileSync("s1.txt","utf-8")
data=data.split(" ")
d=data.sort((a,b)=>a-b)
console.log(d)