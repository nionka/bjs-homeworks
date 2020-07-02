function sleep(milliseconds) {
  let e = new Date().getTime() + milliseconds;

  while (new Date().getTime() <= e) {}
}

function sum(...args) {
    sleep(100);

    return args.reduce((sum, arg) => {
        return sum += +arg;
    }, 0);
}

function compareArrays(arr1, arr2) {
    if (arr1.length === arr2.length) {
        return arr1.every((num, index) => num === arr2[index])
    } else {
        return false
    }
}

function memorize(fn, limit) {
    const memory = [];

    return function(...args) {
        memory.find(function(p){
            return p[args] === this.args
        })
    }

    
}