/*
process is one of the most important Node.js core modules. 
It gives you access to information about the current Node.js 
process, and lets you control it while your app is running.
*/


// Gets all environment variables available to the current Node.js process
console.log(process.env);

// Gets the current Node.js environment mode (like 'development' or 'production')
console.log(process.env.NODE_ENV); // development

// Gets the path of the shell program running the Node.js process
console.log(process.env.SHELL); // /bin/bash

// Gets the system PATH variable where executables are searched for
console.log(process.env.PATH); // /usr/local/bin:/usr/bin:/bin

// Gets the present working directory from where the process was started
console.log(process.env.PWD); // /Users/johndoe/projects/myapp

// Gets the username of the user running the current process
console.log(process.env.USER); // johndoe



// process.argv cmd arguments
console.log(process.argv);
/*
script.js --watch
Hello world
[
  '/Users/user/.nvm/versions/node/v22.17.0/bin/node',
  '/Users/user/Desktop/fCC/script-code/node/node-process/script.js',
  '--watch'
]
*/


//cwd() : current working directory
console.log(process.cwd());



// exit : execute right before the app process finishes
process.on("exit", (code) => {
    console.log("App end", code)
})

// App end 0



//uncaughtException : trigered when an error is not caught in your code by the compiler 
process.on("uncaughtException", (err) => {
    console.log("Uncaught errot ", err.message);
})




//Warning 
process.on("warning", (warning) => {
    console.warn("Warning name", warning.name);
    console.warn("Warning message", warning.message)
})



//emitWarnig() custom warning 
process.emitWarning('This is a custom warning message')