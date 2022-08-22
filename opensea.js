const options = { method: "GET" };
const fetch = require("node-fetch");
for (let index = 0; index < 500; index++) {
	fetch("https://api.opensea.io/api/v1/collection/doodles-official", options)
		.then((response) => response.json())
		.then((response) => console.log(response))
		.catch((err) => console.error(err));
}
