const student = [{
        "name": "ravi",
        "age": 20
    }, {
        "name": "rudra",
        "age": 10
    },
    {
        "name": "rahul",
        "age": 19
    }
]
const a = student.sort((a, b) => b.age - a.age)
    // console.log(a);
for (x of a) {
    console.log(x.name + "" + x.age)
}