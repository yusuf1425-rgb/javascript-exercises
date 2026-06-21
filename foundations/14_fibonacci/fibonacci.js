const fibonacci = function(num) {
    if(num < 0){
        return "OOPS";
    }
    let a = 0, b = 1, nextTerm = 0;

    for(let i = 0; i < num; i++){
        nextTerm = a + b;
        a = b;
        b = nextTerm;
    }
    return a;
};

// Do not edit below this line
module.exports = fibonacci;
