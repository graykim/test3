var fs = require('fs');

var text = fs.readFileSync('textFile.txt', 'utf-8');
console.log(text);
