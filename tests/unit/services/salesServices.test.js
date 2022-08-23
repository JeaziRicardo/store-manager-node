const { expect } = require('chai');
const { describe } = require('mocha');
const Sinon = require('sinon');
const Products = require('../../../models/Products');
const Sales = require('../../../models/Sales');
const saleService = require('../../../services/sales.service');


describe('Testa a camada service de sales', () => {
  afterEach(async () => {
    Sinon.restore();
  });

  describe('testa a função dataSale', () => {
    const PRODUCT = {
      id: 1,
      name: 'Martelo de Thor',
    };

    const SALE_DATA = [
      {
        productId: 1,
        quantity: 1,
      },
      {
        productId: 2,
        quantity: 5,
      },
    ];

    it('Retorna um objeto com as chaves corretas', async () => {
      Sinon.stub(Products, 'productById').resolves(PRODUCT);
      Sinon.stub(Sales, 'insertSale').resolves(3);
      Sinon.stub(Sales, 'insertDataSale').resolves();

      const result = await saleService.dataSale(SALE_DATA);

      expect(result).to.be.an('object');
      expect(result).to.have.keys('id', 'itemsSold');
    });
  })
});