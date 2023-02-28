const stringLength = string => {
  if (string.trim().length < 1) {
    throw new Error ('string length must greater than or equal to 1');
  }else if (string.trim().length > 10) {
    throw new Error ('string length must be less than or equal to 10')
  }else {
    return string.trim().length;
  }
}

const reversed = string => (string.split('').reverse().join(''));

class Calculator {
  constructor(){
    this.result = 0;
  }

  add(num) {
    this.result += num;
    return this.result;
  };
  substract(num) {
    this.result -= num;
    return this.result;
  };
  multiply(num) {
    this.result *= num;
    return this.result;
  };
  divide(num) {
    this.result /= num;
    return this.result;
  };
};

const capitalize = string => (string.substring(0,1).toUpperCase() + string.substring(1));

module.exports =  {
  stringLength,
  reversed,
  capitalize,
  Calculator
};