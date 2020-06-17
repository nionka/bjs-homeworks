function calculateTotalMortgage(percent, contribution, amount, date) {
    "use strict";

    let totalAmount = "";

    if (isNaN(parseInt(percent))) {
        return `Параметр "Процентная ставка" содержит неправильное значение ${percent}`;
    } else {
        percent = parseInt(percent);
    }
    
    if (isNaN(parseInt(contribution))) {
        return `Параметр "Начальный взнос" содержит неправильное значение ${contribution}`;
    } else {
        contribution = parseInt(contribution);
    }

    if (isNaN(parseInt(amount))) {
        return `Параметр "Общая стоимость" содержит неправильное значение ${amount}`;
    } else {
        amount = parseInt(amount);
    }

    if (isNaN(date)) {
        return `Параметр "Срок ипотеки" содержит неправильное значение ${date}`;
    }

    // percent = percent / 100;

    let bodyCredit = amount - contribution;
    let allMonths = (date.getFullYear() - new Date().getFullYear()) * 12 + (date.getMonth() - new Date().getMonth());
    let p = (percent / 100) / 12;
    let monthlyPayment = bodyCredit * (p + p /(((1 + p) ** allMonths) - 1));
    totalAmount = +(monthlyPayment * allMonths).toFixed(2);

    return totalAmount;
}

function getGreeting(name) {
    
    if (name === "" || typeof name === "undefined" || name == null) {
        console.log("Привет, мир! Меня зовут Аноним");
    }
    
    return `Привет, мир! Меня зовут ${name || "Аноним"}`;
    // } else {
    //     console.log(`Привет, мир! Меня зовут ${name}`);
    //     return greeting = `Привет, мир! Меня зовут ${name}`;
    // }
    // return greeting;
}