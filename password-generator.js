var generator = require('generate-password');

var sarrabenjdida = generator.generate({
	length: 15,
	numbers: true
});


console.log(sarrabenjdida );