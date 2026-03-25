var test = {
    "division1": {
        "name": ["2", "B", "H"]
    },
    "division2": {
        "name": ["p", "A", "S"]
    }
}

const div1_data = test.division1.name;
const div2_data = test.division2.name;

var combine_data = div1_data.concat(div2_data).sort(); // combine both arrays
console.log(combine_data);