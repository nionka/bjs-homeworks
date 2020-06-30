//String.prototype.isPalindrome - для задачи №1

String.prototype.isPalindrome = function() {
    let value = this.toLowerCase().replace(/\s+/g, "");

    for (let i = 0; i < value.length; i++) {
      console.log(value.length)
      if (value[i] !== value[(value.length - 1) - i]){
      return false
      } else {
        return true
      }
    }
}

function getAverageMark(marks) {
    let sum = 0;
    let average = 0;

    for (let i = 0; i < marks.length; i++) {
        sum += marks[i];
        average = sum / marks.length;
    }

    // let roundedAverage = Math.round(average);
    // return roundedAverage

    return Math.round(average)
}

function checkBirthday(birthday) {
    let now = +Date.now();
    const birthdayDate = +new Date(birthday);
    let diff = now - birthdayDate;
    const mlsInYear = 1000 * 60 * 60 * 24 * 365.25;
    let age = diff / mlsInYear;

    // if (age > 18) {
    //     return true
    // } else {
    //     return false
    // }
    return age >= 18

    // return verdict
}