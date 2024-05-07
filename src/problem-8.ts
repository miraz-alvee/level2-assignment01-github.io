class Car {
    brand : string ;
    name : string ;
    model : number;

    constructor(brand : string , name : string , model : number){
        this.brand = brand;
        this.name =  name;
        this.model = model;
    }

    aboutCar(){
        console.log(`Your car model is: ${this.model} ${this.brand} ${this.name} `)
    }


}

const car = new Car("Toyota", "Corolla", 2020);
car.aboutCar();

 
// "Your car model is:  2020 Toyota Corolla"