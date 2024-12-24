const convertToCelsius = function(temp) {
  if(temp === 32) return 0;
  let F = (temp - 32) * (5/9);
  return Number(F.toFixed(1));
};

const convertToFahrenheit = function(temp) {
  if(temp == 0) return 32;
  let C = (temp * (9/5) + 32);
  return Number(C.toFixed(1)); 
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
