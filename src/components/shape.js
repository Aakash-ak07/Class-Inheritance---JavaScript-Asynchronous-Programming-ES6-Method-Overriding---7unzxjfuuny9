// declare class
class Shape{
    constructor(name){
        this.name = name;
    }

    drawShape(){
        return `${this.name} is draw`;
    }
    calculateArea(length, width){
        return 2*(length * width);
    }
    color(color){
        return `${color} is Applied on ${this.name}`
    }
}

// export class using module.exports
module.exports = Shape;