const dns = require('dns')

dns.lookup('www.miu.edu', function(err, result) {
    console.log(result)
})