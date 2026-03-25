// // // // const a = {
// // // //     "name": "tree",
// // // //     "course": "Intro",
// // // //     "content": ['1', 'B', 'C']
// // // // }
// // // // console.log(a.name)
// // // // console.log(a.course)
// // // // console.log(a.content[1])

// // // const user = {
// // //     "name": ["ABC", "DEF"],
// // //     "age": "28",
// // //     "course": ["FSD", "DE"],
// // //     "Address": ["t1", "t2", {
// // //         "t3": "give again",
// // //         "t4": "Hiii"
// // //     }],

// // // }
// // // console.log(user.Address[2].t3)

// // const a = {
// //     'D5': [{
// //             "name": "tree",
// //             "course": "Intro",
// //             "content": ['1', 'B', 'c']
// //         },
// //         {
// //             "name": "tree1",
// //             "course": "Intro1",
// //             "content": ['1', 'B', 'c', 'D']

// //         }
// //     ],
// //     "xyz": {
// //         "name": "graphics",
// //         "topic": ["BFS", "DFS", "sorting"]

// //     }
// // }
// // console.log(a.D5[1].name);
// // console.log(a.D5[0].name);
// // console.log(a.xyz.name);
// // console.log(a.xyz.topic);
// // console.log(a.xyz.topic[0]);
// // console.log(a.D5[1])
// // console.log(a.xyz)

// const obj = JSON.parse('{"name":"xyz","age":"17","dob":"1997-03-14"}');
// console.log(obj.dob);
// a = new Date(obj.dob)
// console.log(a);
// a = new Date();
// console.log(a);

function call() {
    obj = JSON.parse('{"name":"test","age":18,"city":"ahmedbad","DOB":"1990-08-24"}')
    obj = new Date(abj.DOB)
    document.getElementById("demo").innerHTML = obj;

}