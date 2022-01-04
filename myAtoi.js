var myAtoi = function(s) {
  var numStr = {'1':1, '2':2, '3':3, '4':4, '5':5, '6':6, '7':7, '8':8, '9':9, '0':0, '+':'+', '-': '-'};
  var isNegative;
  var str = '';
  var max = Math.pow(2, 31) - 1;

  for (let i = 0; i < s.length; i++) {
      if(!numStr[s[i]] && s[i] !== ' ') {
          return 0;
      }

      if(s[i] === '+'){
           if(isNegative === undefined) {
              isNegative = false;
          } else {
              return 0
          }
      } else if(s[i] === '-') {
          if(isNegative === undefined) {
              isNegative = true;
          } else {
              return 0
          }

      } else if(numStr[s[i]]) {

        str += s[i];
          if(!numStr[s[i + 1]]){
              break;
          }
      }
  }

  if(str.length === 0) {
      return 0;
  }

  var result = Number(str);



  if(isNegative) {
      if (result > 2**31) {
      result = 2**31
  }
      return -result;
  } else {
      if (result > Math.max(2**31)) {
      result = Math.max(2**31);
  }
      return result;
  }

};