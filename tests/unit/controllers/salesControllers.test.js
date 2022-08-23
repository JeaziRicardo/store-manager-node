const { expect } = require('chai');
const { describe } = require('mocha');
const Sinon = require('sinon');
const saleController = require('../../../controllers/sale.controller');
const Sales = require('../../../models/Sales');
const saleService = require('../../../services/sales.service');

describe('Testa a camada controller de sales', () => {
  afterEach(async () => {
    Sinon.restore();
  });

  const request = {};
  const response = {};

  response.status = Sinon.stub().returns(response);
  response.json = Sinon.stub().returns();

  describe('Testa a função dataSale', () => {
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

    it('Retorna o status 201', async () => {
      Sinon.stub(saleService, 'dataSale').resolves(SALE_DATA);

      await saleController.dataSale(request, response);

      expect(response.status.calledWith(201)).to.be.true;
    });

    it('Retorna um objeto com os dados corretos', async () => {
      Sinon.stub(Sales, 'insertSale').resolves(3);
      Sinon.stub(Sales, 'insertDataSale').resolves();
      Sinon.stub(saleService, 'dataSale').resolves(SALE_DATA);

      await saleController.dataSale(request, response);

      expect(response.json.calledWith({
        id: 3,
        itemsSold: SALE_DATA,
      })).to.be.false;
    });
  });
});