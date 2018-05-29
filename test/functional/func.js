const Code = require('code');

const Lab = require('lab');

const { expect } = Code;

const lab = Lab.script();

exports.lab = lab;
const { describe, it, after } = lab;

const server = require('../../app');
/**
 * parametro: {
    parametro1: 'Hola mundo',
    parametro2: 'Hola Rodrigo',
  },
 */
const body = {
  parametro1: 'Hola mundo',
  parametro2: 'Hola Rodrigo',
};

describe('Primera prueba funcional', () => {
  it('Prueba POST /', (done) => {
    server.inject(
      {
        method: 'POST',
        url: '/1',
        headers: {
          'Content-Type': 'application/json',
        },
        payload: body,
      },
      (res) => {
        // expect(res.result.parametro).to.be.exist();
        // expect(res.result.parametro.parametro1).to.be.equal('Hola mundo');
        done();
      },
    );
  });

  it('GET Key1 desde Redis /', (done) => {
    server.inject(
      {
        method: 'GET',
        url: '/',
        headers: {
          'Content-Type': 'application/json',
        },
      },
      (res) => {
        expect(res.result).to.be.exist('hola_mundo');
        done();
      },
    );
  });

  after((done) => {
    done();
  });
});
