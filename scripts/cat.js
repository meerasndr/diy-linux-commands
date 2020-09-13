#!/usr/bin/env node
// This is the most simple usage of the linux `cat` command.
//Take filename(s) as argument. Output content of file(s) on console
const fs = require('fs')
let filesToRead = process.argv.slice(2)
for(let file of filesToRead){
    fs.readFile(file, (err, content) => {
        if(err){
            console.log(err)
            return;
        }
        console.log(content.toString())
    })
}