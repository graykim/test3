var crypto = require('crypto');

var key = '비밀키';
var input = 'password';

//암호화
var cipher = crypto.createCipher('aes192', key);
cipher.update(input, 'utf-8', 'base64');
var cipheredOutput = cipher.final('base64');

//복호화
var decipher = crypto.createDecipher('aes192', key);
decipher.update(cipheredOutput, 'base64','utf-8');
var decipheredOutput = decipher.final('utf-8');

// 출력
console.log('암호화 : '+cipheredOutput);
console.log('복호화 : '+decipheredOutput);



