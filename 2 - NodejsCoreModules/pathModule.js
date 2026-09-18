/*
The Node.js path module lets you work with files and directory paths. 
It provides several useful methods for handling and transforming directories, 
including joining, normalizing, and resolving the 
directories across different platforms and operating systems.*/


const path = require("path");

console.log(__filename);
// /Users/user/Desktop/fCC/script-code/node/node-path/script.js

console.log(__dirname);
// /Users/user/Desktop/fCC/script-code/node/node-path



console.log(path.basename(__filename)); // script.js

console.log(path.basename(__filename)); // script.js


console.log(path.extname('text-files/text1.txt')); // .txt


//single path
const joinedPath = path.join("src", "assets", "text-files");
console.log(joinedPath); // src/assets/text-files


//absolute path
const absolutePath = path.resolve("assets", "src", "text-files");
console.log(absolutePath);
// /Users/user/Desktop/fCC/script-code/node/node-path/assets/src/text-files



//returns a object 
const parsedFile = path.parse(__filename);

console.log(parsedFile);
/*
{
 root: '/',
 dir: '/Users/user/Desktop/fCC/script-code/node/node-path',
 base: 'script.js',
 ext: '.js',
 name: 'script'
}
*/



// builds a path from an object containing directory, name, and extension:
const formattedDirectory = path.format({
  dir: "/users/johndoe/docs",
  name: "file",
  ext: ".txt",
});

console.log(formattedDirectory); // /users/johndoe/docs/file.txt