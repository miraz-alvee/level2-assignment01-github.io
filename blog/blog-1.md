Union : Union types focus on allowing values of multiple different types, providing flexibility in accepting various kinds of data.

function displayValue(value: string | number): void {
    console.log(value);
}
displayValue("Hello"); // Output: Hello
displayValue(42); // Output: 42
/................................................/

Intersection: Intersection types focus on combining properties from multiple types into a single type, enabling the creation of new types with combined functionality.

type Printable = { print: () => void };
type Loggable = { log: () => void };

// Create a new type by intersecting the above types
type LoggerPrinter = Printable & Loggable;

// Define an object that satisfies the intersection type
const loggerPrinter: LoggerPrinter = {
    print: () => console.log("HELLO"),
    log: () => console.log("GELLO")
};

// Call the methods of the object
loggerPrinter.print(); 
loggerPrinter.log(); 

