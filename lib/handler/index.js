const indexHand = require('./indexHand');
const postHand = require('./postHand');
const testHand = require('./testHand');
const protocolHand = require('./protocolHand');

const testF = (number1, number2) => number1 + number2;
module.exports = {
  indexHand,
  postHand,
  testF,
  testHand,
  protocolHand,
};
