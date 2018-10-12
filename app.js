const fs = require('fs');

fs.appendFile('greetings.txt', 'Hello world!', err => {
  if (err) console.log(err);
});