const person = [{
        name: "PQR",
        height: 5.2
    },
    {
        name: "XYZ",
        height: 5.3
    },

    {
        name: "RST",
        height: 6.0
    },
]
console.log(Math.min(...person.map(obj => obj.height)))