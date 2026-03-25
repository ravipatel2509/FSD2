// const url=require("url")
// const addr="https://example.com:3000/about?name=xyz&age=20"
// const result=url.parse(addr)
// console.log(result)

// const url=require("url")
// const addr="https://example.com:3000/about?name=xyz&age=20"
// const result=url.parse(addr,true)
// console.log(result.query)

// const url=require("url")
// const addr="https://xyz:1234@example.com:3000/about?name=xyz&age=20#section1"
// const result=url.parse(addr)
// console.log(result)

// const url=require("url")
// const addr="https://localhost:8080/default.html?about?year=2025&month=feb"
// const q=url.parse(addr,true)
// console.log(q)

// const qdata=q.query
// console.log(qdata.year)
// if(qdata.year%4==0) console.log("It's leap year")
//     else console.log("Its a not leap year")

// const url=require("url")
// const ps=require("fs")
// const addr="https://localhost:8080/default.html?year=2025&month=feb"
// const q1=url.parse(addr,true)
// console.log(q1)
// const qdata=JSON.stringify(q1.query)
// ps.writeFile("fsd2.txt",qdata,(err)=>{
//     console.log("compile")
// })


const {URL} = require('url')

const myURL=new URL("https://example.org:8080/p/a/t/h?query=string#hash")
console.log("href :",myURL.href)
console.log(myURL.host)

