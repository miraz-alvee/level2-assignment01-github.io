function logString(input: unknown): void {
    if (typeof input === 'string') { //using typeof as a typeguard 
        console.log(input);
    } 
    else {
        console.error("Error: Input is not a string.");
    }
}

logString("Hello, TypeScript!"); 
logString(42); 
