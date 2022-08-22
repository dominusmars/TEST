//How to get out of maxium call stack in js

async function test() {
	console.log("test");
	setTimeout(test, 0);
}

test();
