#!/usr/bin/env node
const os = require('os');
console.log("Architecture:", os.arch())
console.log("Hostname:",os.hostname())
console.log("Platform:", os.platform())
console.log("Kernel version:", os.version())
console.log("Free memory:",os.totalmem())