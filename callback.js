//asynchronus in settimeout function print the line after 2 second 
function main(cb) {
    console.log("perform operation1")
        //use settimeout to simulate an asynchronous operation
    setTimeout(function() {
        console.log("operation completed")
    }, 2000)
    console.log("perform operation2")
}
// //define the callback_function
// function callback_fun(result) {
//     console.log("result" + result)
// }
//call the main function
main()