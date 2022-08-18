const { expect } = require('chai');
const { describe } = require('mocha');
const Sinon = require('sinon');
const productService = require('../../../services/products.services');
const productController = require('../../../controllers/product.controller');

describe('Testa a camada controller de products', () => {
  describe('Testa a função getProducts', () => {
    const ALL_PRODUCTS = [
      { id: 1, name: 'Martelo de Thor' },
      { id: 2, name: 'Traje de encolhimento' },
      { id: 3, name: 'Escudo do Capitão América' },
    ];

    afterEach(async () => {
      Sinon.restore();
    });

    it('Retorna um array de objeto', async () => {
      Sinon.stub(productService, 'getProducts').resolves(ALL_PRODUCTS);

      const request = {};
      const response = {};

      response.status = Sinon.stub().returns(response);
      response.json = Sinon.stub().returns();

      await productController.getProducts(request, response);

      expect(response.json.calledWith(ALL_PRODUCTS)).to.be.true;
    });

    it('Retorna um status 200', async () => {
      Sinon.stub(productService, 'getProducts').resolves(ALL_PRODUCTS);

      const request = {};
      const response = {};

      response.status = Sinon.stub().returns(response);
      response.json = Sinon.stub().returns();

      await productController.getProducts(request, response);

      expect(response.status.calledWith(200)).to.be.true;
    });
  });

  describe('Testa a função productsById', () => {
    describe('O id corresponde com o Banco de Dados', () => {
      const PRODUCT = {
        id: 1,
        name: 'Martelo de Thor',
      };

      afterEach(async () => {
        Sinon.restore();
      });

      it('Retorna um objeto', async () => {
        Sinon.stub(productService, 'productsById').resolves(PRODUCT);

        const request = {};
        const response = {};
        request.params = { id: '1' };

        response.status = Sinon.stub().returns(response);
        response.json = Sinon.stub().returns();

        await productController.productsById(request, response);

        expect(response.json.calledWith(PRODUCT)).to.be.true;
      });

      it('Retorna o status 200', async () => {
        Sinon.stub(productService, 'productsById').resolves(PRODUCT);

        const request = {};
        const response = {};
        request.params = { id: '1' };

        response.status = Sinon.stub().returns(response);
        response.json = Sinon.stub().returns();

        await productController.productsById(request, response);

        expect(response.status.calledWith(200)).to.be.true;
      });
    });
  });
});
