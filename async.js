//How to get out of maxium call stack in js

//Using timeout removes the max call stack error but is alot slower then just regular recursion

async function recursionWithTimeout(number) {
	console.log(number);
	setTimeout(() => recursionWithTimeout(++number), 0);
}
async function recursion(number) {
	console.log(number);
	await recursion(++number);
}
// recursion(0);
recursionWithTimeout(0);
