const {readFile} = require('fs');
const {promisify} = require('util');


const getText = (pathFile) => {
	return new Promise(function (resolve, reject) {
		readFile(pathFile, 'utf-8', (err, data) => {
			if (err) {
				reject(err);
			}
			resolve(data);
		})	
	})
}

// Lo comento para poder usar async/await
//
// getText('./data/fourth.txt')
// 	.then((result) => console.log(result))
// 	.then(() => getText('./data/first.txt'))
// 	.then(result => console.log(result))
// 	.catch((error) => console.log(error))

async function read() {
	try{
		const result = await getText('./data/first.txt');
		console.log(result);
		const result2 = await getText('./data/second.txt');
		console.log(result2);
		// throw new Error('esto es un error que no se esperaba');
		const result3 = await getText('./data/third.txt');
		console.log(result3);
		const result4 = await getText('./data/fourth.txt');
		console.log(result4);
	} catch(error) {
		console.log(error);
	}
}

read ();

