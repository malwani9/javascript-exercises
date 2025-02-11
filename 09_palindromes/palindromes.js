const palindromes = function (str) {
   let punctuation = /[\.,?!]/g;
   let joinNewText = str.replace(punctuation,"").toLowerCase().replaceAll(" ","");
   let joinReversedText = joinNewText.split("").reverse().join("");

   return joinNewText === joinReversedText ? true : false;
};

console.log(palindromes('A car, a man, a maraca.'));
// Do not edit below this line
module.exports = palindromes;
