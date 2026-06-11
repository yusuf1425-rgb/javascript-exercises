const sumAll = function(num1, num2) {
    let i = 0;
    let j = 0;
    let sum = 0;
    if ((num1 < 0 || num2 < 0) || (!Number.isInteger(num1) ||!Number.isInteger(num2))){
        return "ERROR";
    }
    else if(num1 < num2){
        i = num1;
        j = num2;
    } else {
        j = num1;
        i = num2;
    }

    for(i ; i <= j; i++) {
        sum += i;
    }

    return sum;
};

console.log(sumAll(1, 4));

// Do not edit below this line
module.exports = sumAll;
