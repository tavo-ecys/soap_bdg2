const Code = require('code');

const Lab = require('lab');

const { expect } = Code;

const lab = Lab.script();

exports.lab = lab;
const { describe, it, after } = lab;

const server = require('../../app');

const body = require('../../mongo/tipoCambioFechaInicial');

describe('Instalación de esquemas para Tipo Cambio', () => {
  it('Prueba POST /install tipoCambioFechaInicial', (done) => {
    server.inject(
      {
        method: 'POST',
        url: '/install',
        headers: {
          'Content-Type': 'application/json',
        },
        payload: body.TipoCambio,
      },
      (res) => {
        expect(res.result.error).to.be.equal(200);
        done();
      },
    );
  });

  after((done) => {
    done();
  });
});
