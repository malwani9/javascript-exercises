const removeFromArray = function(arr, ...elements) {
    let arrWithout;
    let elementsArr = elements;
  
     arrWithout = arr.filter((passElemet) => !elementsArr.includes(passElemet));
  

  return arrWithout; 
 
};


removeFromArray([1, 2, 3], "1", 3);

// Do not edit below this line
module.exports = removeFromArray;
