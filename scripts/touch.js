#!/usr/bin/env node
const fs = require('fs')
const filename = []
process.argv.forEach((val, index) => {
    if(index > 1){
        filename.push(val)
    }
})

for(file of filename){
    fs.openSync(file, 'a')
}