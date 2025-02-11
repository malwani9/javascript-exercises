const fibonacci = function(num) {
  let numInt = parseInt(num);
  let secondPrevNum = 0;
  let firstPrevNum = 1;
  if(numInt === 0 ) { return 0; }
  if(numInt < 0 ) { return "OOPS"; }
  for(let i = 2; i <= numInt; i++) {
    let nextFibonacciNum = firstPrevNum + secondPrevNum;
    secondPrevNum = firstPrevNum;
    firstPrevNum = nextFibonacciNum;
  }

  return firstPrevNum;
};

// Do not edit below this line
module.exports = fibonacci;
