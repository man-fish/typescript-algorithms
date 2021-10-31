interface Shape {
    draw: () => void;
}

class Circle implements Shape {
    constructor() {
        if (new.target === Circle) {
            throw new Error("抽象类不能实例化!");
        }
    }
    draw() {
        console.log("circle");
    }
}

class Square implements Shape {
    constructor() {
        if (new.target === Square) {
            throw new Error("抽象类不能实例化!");
        }
    }
    draw() {
        console.log("cquare");
    }
}

class Rectangle implements Shape {
    constructor() {
        if (new.target === Rectangle) {
            throw new Error("抽象类不能实例化!");
        }
    }
    draw() {
        console.log("cectangle");
    }
}

class AnimalFactory {
    static getShapeInstance(shapeType: string) {
        if (shapeType === "CIRCLE") {
            return new Circle();
        } else if (shapeType === "RECTANGLE") {
            return new Rectangle();
        } else if (shapeType === "SQUARE") {
            return new Square();
        }
        return null;
    }
}
