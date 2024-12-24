const repeatString = function(string, num) {
  let repeatedString = '';
  if(num < 0){
    return 'ERROR';
  }
  for(let i = 1; i <= num; i++) {
    repeatedString += string;
  }

  return repeatedString;
};

repeatString('hey',3);
repeatString('hello',10);
repeatString('hi',1);
repeatString('bye',0);
repeatString('goodbye',-1);
repeatString('odin',100);
repeatString('',10);

// Do not edit below this line
module.exports = repeatString;
