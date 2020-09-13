#!/usr/bin/env node
const fs = require('fs')
const colors = require('colors')
fs.readdir(process.cwd(), (err, filenames) => {
    if(err){
        console.log(err)
        return
    }
    for(let file of filenames){
        fs.lstat(file, (err, stat) => {
            if(stat.isDirectory()){
                console.log(file.red)
            }
            else{
                console.log(file.green)
            }
        })
    }
})