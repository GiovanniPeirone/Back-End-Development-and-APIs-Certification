/*
The Node.js Buffer module lets you work with 
binary data like files, images, or network streams directly. 
With it, you can store and manipulate binaries directly in memory.
*/ 

const { Buffer } = require("buffer")

// Create a buffer from a string
const myStrBuffer = Buffer.from("freeCodeCamp");
console.log(myStrBuffer); // <Buffer 66 72 65 65 43 6f 64 65 43 61 6d 70>

// Create a buffer from an array of numbers
const myNumBuffer = Buffer.from([
  70, 82, 69, 69, 67, 79, 68, 69, 67, 65, 77, 80,
]);

console.log(myNumBuffer); // <Buffer 46 52 45 45 43 4f 44 45 43 41 4d 50>

// You can access individual buffer elements just like an array:
console.log(myNumBuffer[0]); // 70
console.log(myStrBuffer[0]); // 102


//You can also use the toString() method on the buffers to see what they really look like:

console.log(myStrBuffer.toString()); // freeCodeCamp
console.log(myNumBuffer.toString()); // FREECODECAMP


//Buffer.alloc() lets you create a new buffer of a given size (number of bytes). Every byte inside it is automatically filled with 0:

const someBuffer = Buffer.alloc(10);
console.log(someBuffer); // <Buffer 00 00 00 00 00 00 00 00 00 00>


//You can go ahead and use the Buffer.write() method to write to this buffer:

someBuffer.write("Hello fCC");

console.log(someBuffer); // <Buffer 48 65 6c 6c 6f 20 66 43 43 00>
console.log(someBuffer.toString()); // Hello fCC


//If you write more data than the buffer can hold, it will be truncated:

someBuffer.write("Hello freeCodeCamp");

console.log(someBuffer); // <Buffer 48 65 6c 6c 6f 20 66 72 65 65>
console.log(someBuffer.toString()); // Hello free

//Finally, you can use Buffer.byteLength() to show the number of bytes needed to store a string in a certain encoding:

console.log(Buffer.byteLength("Hello freeCodeCamp"));


/**
 * Other Buffer methods include:

Buffer.isBuffer(): checks if a given object is a buffer
Buffer.compare(): compares two buffers and returns their sort order
Buffer.concat(): joins multiple buffers together into one
 */