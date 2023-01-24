var fs = require('fs');

fs.appendFile('welcom.txt', 'Hello Node', function (err) {
  if (err) throw err;
  console.log('Saved!');
});

fs.readFile("hello.txt","utf-8",(err,data)=>{
    if (err) throw err
    else console.log(data)
})