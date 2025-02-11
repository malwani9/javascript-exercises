const add = function(a,b) {
	return a + b;
};

const subtract = function(a,b) {
	return a - b;
};

const sum = function(arr) {
	return arr.reduce((total,num) => total + num, 0);
};

const multiply = function(arr) {
  return arr.reduce((total,num) => total * num, 1);
};

const power = function(a,b) {
	return a ** b;
};

const factorial = function(num) {
   let fctr = 1;
	 if(num < 2 && num >= 0){
    return 1;
   }
   else{
     for(let i = num; i > 1; i--) {
        fctr *= i;
     }
     return fctr;
   }
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
