const fs = require('fs');

// const first = fs.readFileSync('./data/first.txt', 'utf-8');
// const second = fs.readFileSync('./data/second.txt');

// console.log(first);
// console.log(second.toString());

// var title = 'este contenido se ha añadido';

// fs.writeFileSync('./data/third.txt', 'este es un tercer archivo');

// fs.writeFileSync('./data/fourth.txt', title, {
// 	flag: 'a'
// });

fs.readFile('./data/first.txt', 'utf-8', (error, data) => {
	if (error) {
		console.log(error)
	} 
	console.log(data);

	fs.readFile('./data/second.txt', 'utf-8', (error, data) => {
		if (error) {
			console.log(error)
		} 
		console.log(data);
		fs.writeFile('./data/newfile.txt', 'archivo creado desde fs', (err, data) => {
			console.log(err);
			console.log(data);
		});
	});
});

// CALLBACK HELL no es una buena practica