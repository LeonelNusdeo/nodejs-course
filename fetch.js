// Top level await (ECMASCRIPT 2022)
// necesito "type": "module", en package.json
// si no, me dice que falta el async
//
// try {
// 	const res = await fetch('https://jsonplaceholder.typicode.com/posts');
// 	const data = await res.json();
// 	console.log(data);
// } catch(error) {
// 	console.log(error);
// }

async function loadData() {
	try {
		const res = await fetch('https://jsonplaceholder.typicode.com/posts');
		const data = await res.json();
		console.log(data);
	} catch(error) {
		console.log(error);
	}
}

loadData();