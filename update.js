let person = {
    name: "Ravi",
    age: 20,
    city: "ahmedabad"
}
person.age = 30;
console.log(person)

person["city"] = "Bharuch";
console.log(person);

let key = "age";
person[key] = 25;
console.log(person);