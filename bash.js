const pwd = require("./pwd")
const ls = require("./ls")


process.stdout.write('prompt > ');
// // process.stdin.on('data', (data) => {
// //     const cmd = data.toString().trim();
// //     process.stdout.write('You typed: ' + cmd) 
// //     process.stdout.write('\nprompt > ') 
// // })
process.stdin.on('data', (data) => {
    let command = data.toString().toLowerCase().trim()
    if (command === 'pwd'){
        pwd()
    }
    else if (command === "ls"){
        ls()
    }
    return
    // if (data.toString().toUpperCase().trim() === 'PWD') {
    //     pwd()
    // } else 
})

