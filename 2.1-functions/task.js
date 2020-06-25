function getSolutions(a, b, c) {
    let roots = [];
    let d = b ** 2 - 4 * a * c;

    if (d < 0) {
        return {
            D: d,
            roots
        };
    } else if (d === 0) {
        roots[0] = -b / (2 * a);
        return {
            D: d,
            roots
        };
    } else {
        roots[0] = (-b + Math.sqrt(d)) / (2 * a);
        roots[1] = (-b - Math.sqrt(d)) / (2 * a);
        return {
            D: d,
            roots
        };
    }
}

function showSolutionsMessage(a, b, c) {
    let result = getSolutions(a, b, c);

    console.log(`Вычисляем корни квадратного уравнения ${a}x^2 + ${b}x + c `);
    console.log(`Значение дискриминанта: ${result.D}`);

    if (result.D < 0) {
        console.log("Уравнение не имеет вещественных корней");
    } else if (result.D === 0) {
        console.log(`Уравнение имеет один корень х1 = ${result.roots[0]}`);
    } else {
        console.log(`Уравнение имеет два корня. х1 = ${result.roots[0]} х2 = ${result.roots[1]}`);
    }
}

function getAverageScore(data) {
    let sum = 0;
    let result = 0;
    let averageArr = [];

    for (let key in data) {
        data[key] = getAverageMark(data[key]);
        averageArr.push(data[key]);
    }

    for (let i = 0; i < averageArr.length; i++) {
        sum += averageArr[i];
        result = sum / averageArr.length;
    }

    data.average = result;

    return data;
}

function getAverageMark(marks) {
    let sum = 0;

    if (marks.length === 0) {
        return 0;
    } else {
        for (let i = 0; i < marks.length; i++) {
            sum += marks[i];
        }
        return sum / marks.length;
    }    
}

function getPersonData(secretData) {
    let transcript = {};

    for (let key in secretData) {
        if (key === "aaa") {
            transcript.firstName = getDecodedValue(secretData[key]);
        } else {
            transcript.lastName = getDecodedValue(secretData[key]);
        }
    }

    return transcript;
}

function getDecodedValue(secret) {

    if (secret === 0) {
        return "Родриго";
    } else {
        return "Эмильо";
    }
}