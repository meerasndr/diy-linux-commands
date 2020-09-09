#!/usr/bin/env node
const fs = require('fs')
fs.readdir('.', (err, filenames) => {
    if(err){
        console.log(err)
        return
    }
    console.log(filenames)
})