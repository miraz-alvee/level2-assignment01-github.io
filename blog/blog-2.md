Benefits of async/await over callbacks and promises:
Readability: Async/await code looks more synchronous and is easier to understand, especially for developers who are familiar with synchronous programming.
Error Handling: Async/await allows you to use try/catch blocks for error handling, making it easier to manage errors compared to using .catch() with promises or passing error callbacks with callbacks.
Code Organization: Async/await allows you to write asynchronous code in a more linear fashion, avoiding the "callback hell" problem associated with nested callbacks.
Debugging: Async/await code can be easier to debug since it closely resembles synchronous code, and you can set breakpoints and step through the code more naturally.