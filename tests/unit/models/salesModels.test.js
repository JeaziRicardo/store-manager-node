const { expect } = require('chai');
const { describe } = require('mocha');
const Sinon = require('sinon');
const connection = require('../../../models/connection');
const Sales = require('../../../models/Sales');


describe('Testa a camada models de sales', () => {
  describe('Testa a função insertSale', () => {
    const SALE_ID = [{ insertId: 1 }]

    afterEach(async () => {
      Sinon.restore();
    });

    it('Retorna o id da venda', async () => {
      Sinon.stub(connection, 'execute').resolves(SALE_ID);

      const result = await Sales.insertSale();

      expect(result).to.be.equal(1);
      expect(result).to.be.a('number');
    });
  });
});