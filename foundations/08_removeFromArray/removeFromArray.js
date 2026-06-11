/**
 * @param {Array} arr 
 * @param {string} text 
 */
const removeFromArray = function(arr, element) {
    return arr.filter((e) => e !== element);
};

console.log(removeFromArray([1, 2, 3, 4, 3], 3));

// Do not edit below this line
module.exports = removeFromArray;
