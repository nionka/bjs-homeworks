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
    // if (arr1.length === arr2.length) {
    //     return arr1.every((num, index) => num === arr2[index]);
    // } else {
    //     return false
    // }

    return arr1.length === arr2.length && arr1.every((num, index) => num === arr2[index]);
}

function memorize(fn, limit) {
    const memory = [];

    return function(...args) {
        
        let value = memory.find((count) => compareArrays(count.args, args));

        if (value) { // (value !== undefined) было так
            return value.result
        }
        // } else {
        //     memory.push({args, result: fn(...args)}); было так
        // }
        memory.push({args, result: fn(...args)});

        if (memory.length > limit) {
            memory.shift()
        }
        
        return memory[memory.length - 1].result
    }   
}