// console.log('first');
// setTimeout(() => {
// 	console.log('second');
// }, 0); 
// console.log('third');

const http = require('http');

const server = http.createServer((req, res) => {
	if (req.url === '/') {
		res.write('welcome to the server');
		return res.end();
	}
	if (req.url === '/about') {

		// blocking code
		// for (let i = 0; i < 1000000; i++) {
		// 	console.log(Math.random() * i)
		// }


		// res.write('about page');
		// es lo mismo ponerlo en res.end()
		return res.end('about page');
	}
	res.end('not found');
})

server.listen(3000);
console.log('Server on port 3000')