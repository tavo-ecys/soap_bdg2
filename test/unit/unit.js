const Code = require('code');

const Lab = require('lab');

const { expect } = Code;

const lab = Lab.script();

exports.lab = lab;
const { describe, it, after } = lab;

const test = require('../../lib/handler');

describe('Primera prueba unitaria', () => {
  it('Suma de dos números', (done) => {
    const n1 = 9;
    const n2 = 5;
    const result = test.testF(n1, n2);

    expect(result).to.be.equal(n1 + n2);
    done();
  });

  it('Suma diferente', (done) => {
    const n1 = 9;
    const n2 = 5;
    const result = test.testF(n1, n2);

    expect(result).to.be.not.equal(n1 + 9);
    done();
  });

  after((done) => {
    done();
  });
});
