#!/usr/bin/env node
const fs = require('fs')
let outputString = ''
process.argv.forEach((val, index) => {
    if((index > 1) && (index < process.argv.length - 1)){
        outputString += val + ' '
    }
    else if(index === process.argv.length-1){
        outputString += val
    }
})
console.log(outputString)
