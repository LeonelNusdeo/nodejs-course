const {readFile} = require('fs');
const {promisify} = require('util');

const readFilePromise = promisify(readFile);

// Lo comento para poder usar promisify
//
// const getText = (pathFile) => {
// 	return new Promise(function (resolve, reject) {
// 		readFile(pathFile, 'utf-8', (err, data) => {
// 			if (err) {
// 				reject(err);
// 			}
// 			resolve(data);
// 		})	
// 	})
// }

// Lo comento para poder usar async/await
//
// getText('./data/fourth.txt')
// 	.then((result) => console.log(result))
// 	.then(() => getText('./data/first.txt'))
// 	.then(result => console.log(result))
// 	.catch((error) => console.log(error))

async function read() {
	try{
		const result = await readFilePromise('./data/first.txt', 'utf-8');
		console.log(result);
		const result2 = await readFilePromise('./data/second.txt', 'utf-8');
		console.log(result2);
		// throw new Error('esto es un error que no se esperaba');
		const result3 = await readFilePromise('./data/third.txt', 'utf-8');
		console.log(result3);
		const result4 = await readFilePromise('./data/fourth.txt', 'utf-8');
		console.log(result4);
	} catch(error) {
		console.log(error);
	}
}

read ();

