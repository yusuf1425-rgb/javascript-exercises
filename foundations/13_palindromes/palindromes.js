const palindromes = (text) => {
    const cleanText = text.toLowerCase().replace(/[^A-Za-z0-9]/g, "");
    return cleanText === cleanText.split("").reverse().join("");
};

console.log(palindromes('r3ace3car'));
console.log(palindromes('tacos'));

// Do not edit below this line
module.exports = palindromes;
