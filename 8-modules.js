const names = require('./4_names')
const sayHi = require('./5_names')
const data = require('./6_alternative')
sayHi('susan')
sayHi(names.john)
sayHi(names.peter)
require('./7_mind_grenade')

const os = require('os')

//info about current user

const user = os.userInfo();

// methos return the system uptime is s 

console.log(`the system uptime ${os.uptime()}`)

const currentOS={
    name:os.type(),
    release:os.release(),
    totalMem:os.totalmem(),
    freeMem:os.freemem(),

}
console.log(currentOS)