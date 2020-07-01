function parseCount(value) {

    const parsValue = Number.parseInt(value);

    if (isNaN(parsValue)) {
        throw new Error("Невалидное значение")
    }

    return parsValue
}

function validateCount(value) {

    try { 
       return parseCount(value);
    } catch(e) {
        return new Error("Невалидное значение")
    }
}

class Triangle {
    constructor(a, b, c) {
        this.a = a;
        this.b = b;
        this.c = c;

        if ((a + b) < c || (a + c) < b || (b + c) < a) {
            throw new Error("Треугольник с такими сторонами не существует")
        }
    }

    getPerimeter() {
        return this.a + this.b + this.c
    }

    getArea() {
        const p = (this.a + this.b + this.c) / 2;
        const S = Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c));

        return +S.toFixed(3)
    }    
}

function getTriangle(a, b, c) {
    try {
        return new Triangle(a, b, c);    
    } catch(e) {
         class EmptyTriangle extends Triangle {
             getPerimeter() {
                 return "Ошибка! Неправильный треугольник"
             }

             getArea() {
                 return "Ошибка! Неправильный треугольник"
             }
         }

        return new EmptyTriangle()   
    }   
}