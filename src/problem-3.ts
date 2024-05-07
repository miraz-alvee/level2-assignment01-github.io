{


function filterEvenNumber(arr: number[]){

    const filterNumber = arr.filter(num => num % 2 == 0);  //filter the even number 
    return filterNumber;
}

const numbers: number[] = [1,2,3,4,5,6,7,8,9,10];
console.log(filterEvenNumber(numbers));



}