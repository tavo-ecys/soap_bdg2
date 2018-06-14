module.exports.TipoCambio = {
  idTransaction: 1,
  name: 'TipoCambioDia',
  attributesOut: [
    {
      nameIn: 'fecha',
      nameOut: 'fechaActual',
      path: 'TipoCambioDiaResult.CambioDolar.VarDolar[0]',
    },
    {
      nameIn: 'referencia',
      nameOut: 'tasa',
      path: 'TipoCambioDiaResult.CambioDolar.VarDolar[0]',
    },
  ],
};
