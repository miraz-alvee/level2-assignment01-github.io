function repeatString(a: string, b: number): string {
    let result = "";
    for (let i = 0; i < b; i++) {
        result = result + a; // make the string multipy by 3
    }
    return result;
}

console.log(repeatString("hello!", 3)); 