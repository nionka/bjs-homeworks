function getResult(a,b,c){
    "use strict";

    let x = [];
    let d = b ** 2 - 4 * a * c;

    if (d === 0) {
        x[0] = -b / (2 * a);
    } else if (d > 0) {
        x[0] = (-b + Math.sqrt(d)) / (2 * a);
        x[1] = (-b - Math.sqrt(d)) / (2 * a);
    }
    // } else {  // не нужно, тк х уже равен пустому массиву
    //     x = [];
    // }

    return x;
}

function getAverageMark(marks){
    let averageMark = 0;
    let sum = 0;

    if (marks.length === 0) {
        return 0;
    } else if (marks.length > 5) {
        console.log("Оценок слишком много, беру первые 5");
        marks = marks.slice(0, 5);
    }

    for (let i = 0; i < marks.length; i++) {
        sum += marks[i];
    }

    // averageMark = sum / marks.length; // можно сразу возвращать операцию

    // return averageMark;
   return averageMark = sum / marks.length;
}

function askDrink(name,dateOfBirthday){
    // let userYear = dateOfBirthday.getFullYear();
    // let thisYear = new Date().getFullYear();
    // let ageGap = thisYear - userYear;
    // let result = "";


    // if (ageGap > 18) {
    //     result = `Не желаете ли олд-фэшн, ${name}?`;
    // } else {
    //     result = `Сожалею, ${name}, но я не могу вам продать алкоголь. Зато могу предложить вам замечательный клюквенный компот!`;
    // }
    // return result;

    let ageGap = new Date().getFullYear() - dateOfBirthday.getFullYear();

    if (ageGap > 18) {
        return result = `Не желаете ли олд-фэшн, ${name}?`;
    } else {
        return result = `Сожалею, ${name}, но я не могу вам продать алкоголь. Зато могу предложить вам замечательный клюквенный компот!`;
    }
}