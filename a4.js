function firstlast(a) {
    var temp = {}
    temp[a[1]] = a[a.length - 1]
    return temp
}
var data = ['abc', 'pqr', 'xyz', 'drf']
console.log(firstlast(data))