var crypto = require('crypto');

var shasum = crypto.createHash('sha256');
shasum.update('abcd');
var output = shasum.digest('hex');

console.log('crypto.hash',output);
