// iife : immediately invoked function expression

(function chai(){    //named iife
    console.log(`DB CONNECTED`);
})();

// iife use: to avoid pollution from global scope

((name) => {     // unamed iife
    console.log(`DB CONNECTED 2 ${name}`);
})('sahil')

// Note : iife dont know where to stop context so we need to put ; at end of function to stop its context