#!/usr/bin/env node
const os = require('os');
const getDetails = (key) => {
    switch (key) {
        case 'arch':
            console.log(os.arch())
            break;
        case 'hostname':
            console.log(os.hostname())
            break;
        case 'platform':
            console.log(os.platform())
            break;
        case 'kernel':
            console.log(os.kernel())
            break;
        case 'memory':
            console.log(os.totalmem())
            break;
        default:
            showDefault()
            break;
    }
}

const showDefault = () => {
    console.log("Arch", os.arch())
    console.log("Hostname", os.hostname())
    console.log("Platform", os.platform())
    console.log("Kernel version", os.version())
    console.log("Total memory", os.totalmem())
}

const flags = process.argv.slice(2)

if(flags.length){
    flags.forEach(flag => {
        getDetails(flag)
    })
}
else {
    showDefault()
}

