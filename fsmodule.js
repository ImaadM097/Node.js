const fs = require('fs');

// fs.readFile('file.txt', 'utf-8', (err, data) => {
//     console.log(err, data);
// });

fs.writeFile('file.txt', "Hello Hello", ()=>{
    console.log("wrtiien");
})

console.log("Imaad")