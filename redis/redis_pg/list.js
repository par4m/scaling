const client = require('./client')

async function init() {


    // const res = await client.lrange("message",0,4)
    const res = await client.xadd("temperature", "*", "city", "Delhi", "temperature", 32)
    console.log(res)




}

init()