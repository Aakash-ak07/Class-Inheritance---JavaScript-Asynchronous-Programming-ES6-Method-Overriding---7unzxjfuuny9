// import using require
let Shape = require('./shape');

// declare class
class Circle extends Shape{
    constructor(name){
        super(name);
    }

    calculateArea(radius){
        return Math.PI * Math.pow(radius, 2)
    }
}


// export class using module.exports 
module.exports=Circle; 