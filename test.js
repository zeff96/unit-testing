const {stringLength,reversed, capitalize, Calculator} = require('./index.js');
const calculator = new Calculator();

test('sring length', () => {
  const str = 'zeff'
  expect(stringLength(str)).toBe(4)
});

test('string length greater than or equal one', () => {
  const str = ''
  expect(() => stringLength(str)).toThrow(Error);
});

test('string length less than or equal 10', () => {
  const str = 'zeffandMostafa'
  expect(() => stringLength(str)).toThrow(Error);
});

test('reversing string', () => {
  const str = 'zeff'
  expect(reversed(str)).toBe('ffez')
});

describe('add group', () => {
  test('add num 1', () => {
    expect(calculator.add(2)).toBe(2)
  });

  test('add num 2', () => {
    expect(calculator.add(2)).toBe(4);
  });

  test('add num 3', () => {
    expect(calculator.add(2)).toBe(6);
  });
});

describe('subtract group', () => {
  test('subtract num 1', () => {
    expect(calculator.substract(2)).toBe(4);
  });
  test('subtract num 2', () => {
    expect(calculator.substract(1)).toBe(3);
  });
  test('subtract nim 3', () => {
    expect(calculator.substract(2)).toBe(1);
  });
});
describe('multiply group', () => {
  test('multiply num 1', () => {
    expect(calculator.multiply(2)).toBe(2);
  });
  test('multiply num 2', () => {
    expect(calculator.multiply(2)).toBe(4);
  });
  test('multiply nim 3', () => {
    expect(calculator.multiply(2)).toBe(8);
  });
});
describe('divide group', () => {
  test('divide num 1', () => {
    expect(calculator.divide(2)).toBe(4);
  });
  test('divide num 2', () => {
    expect(calculator.divide(1)).toBe(4);
  });
  test('divide nim 3', () => {
    expect(calculator.divide(2)).toBe(2);
  });
});

test('capitalize', () => {
  expect(capitalize('zeff')).toBe('Zeff')
})