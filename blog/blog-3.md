Type guards are necessary in TypeScript to narrow down the type of a variable within a certain code block. They help TypeScript understand the type of a variable more accurately, allowing for better type inference and type checking. Without type guards, TypeScript would have to rely solely on the declared type of a variable, which might not always provide enough information, especially in scenarios where the type of a variable could change dynamically.

typeof Type Guards:
Use typeof to check the type of a variable at runtime.
Typically used with primitive types (string, number, boolean, symbol) or function.
Example:
typescript
Copy code
function isNumber(value: unknown): value is number {
    return typeof value === "number";
}
Use case: Checking if a variable is a number before performing numeric operations.

instanceof Type Guards:
Use instanceof to check if an object is an instance of a particular class at runtime.
Typically used with class instances.
Example:
typescript
Copy code
class Animal {}
class Dog extends Animal {}

function isDog(animal: Animal): animal is Dog {
    return animal instanceof Dog;
}
Use case: Checking if an object is an instance of a specific class before accessing its 
properties or methods.

in Type Guards:
Use in to check if a property exists in an object at runtime.
Typically used with object types.
Example:
typescript
Copy code
function hasName(obj: any): obj is { name: string } {
    return "name" in obj;
}
Use case: Checking if an object has a specific property before accessing it.

Custom Type Guards:
Custom type guards are user-defined functions that return a boolean indicating whether the input parameter satisfies a specific type condition.
Can use any logic to determine the type.
Example:
typescript
Copy code
function isStringOrNumber(value: unknown): value is string | number {
    return typeof value === "string" || typeof value === "number";
}

Use case: Checking if a variable is either a string or a number before performing certain operations.