/*
its a way to get access to the file sistem

The Node fs module provides you with methods for working with files and folders, including opening and closing, reading and writing, and deleting operations.

*/ 

//Iimport fs by:
const fs = require("fs");


fs.writeFile() // Asynchronous file writing
fs.writeFileSync() // Synchronous file writing

fs.readFile() // Asynchronous file reading
fs.readFileSync() // Synchronous file reading

fs.open() // Asynchronous open
fs.openSync() // Synchronous open

fs.openAsBlob() // Asynchronous, no synchronous counterpart

fs.opendir() // Opens directory
fs.opendirSync() // Synchronous directory open


/*
Síncrono: una operación bloquea el flujo hasta que termina. 
El código siguiente espera.
Asíncrono: una operación no necesariamente bloquea el flujo; podés continuar 
ejecutando otras cosas mientras esperás el resultado. 
Después, cuando termina, se procesa el resultado mediante un callback, 
Promise/await, evento, etc.
*/

// other way to use the async/await is by using the promises for example :
fs.promises.writeFile()
// que es lo mismo que :
fs.writeFileSync





//Ejemplos
//1 version asincronous
fs.writeFile("filePath", "content", "utf8", (err) => {
  if (err) {
    throw err;
  }
  console.log("File written to!");
});


//2 version fs/promise 

async function promisesExample() {
  try {
    await fs.promises.writeFile("filePath", "content", "utf8");
    console.log("File written to!");
  } catch (err) {
    console.error("Error:", err);
  }
}

promisesExample();



// 3 version syncronous

try {
  fs.writeFileSync("filePath", "content", "utf8");
  console.log("File written to!");
} catch (err) {
  console.error("Error:", err);
}












