const { expect } = require('chai');
const { describe } = require('mocha');
const Sinon = require('sinon');
const connection = require('../../../models/connection');
const Products = require('../../../models/Products');



describe('Testa a camada models de products', () => {
  describe('Testa a função getAllProducts', () => {
    const ALL_PRODUCTS = [
      { id: 1, name: 'Martelo de Thor' },
      { id: 2, name: 'Traje de encolhimento' },
      { id: 3, name: 'Escudo do Capitão América' },
    ];

    afterEach(async () => {
      Sinon.restore();
    });

    it('Retorna um array', async () => {
      Sinon.stub(connection, 'execute').resolves([ALL_PRODUCTS]);

      const result = await Products.getAllProducts();
      expect(result).to.be.an('array');
    });

    it('Retorna um array de objetos', async () => {
      Sinon.stub(connection, 'execute').resolves([ALL_PRODUCTS]);

      const [result] = await Products.getAllProducts();
      expect(result).to.be.an('object');
    });
    
    it('O objeto do array tem as chaves corretas', async () => {
      Sinon.stub(connection, 'execute').resolves([ALL_PRODUCTS]);
      
      const [result] = await Products.getAllProducts();
      expect(result).to.all.keys('name', 'id');
    });
  });

  describe('Testa a função productById', () => {
    describe('O id não corresponde com o Banco de Dados', () => {
      afterEach(async () => {
        Sinon.restore();
      });
      it('Retorna um objeto que está vazio', async () => {
        Sinon.stub(Products, 'productById').resolves({});

        const result = await Products.productById(999);
        expect(result).to.be.an('object');
        expect(result).to.be.empty;
      });
    })
    describe('O id corresponde com o Banco de Dados', () => {
      const PRODUCT = {
        id: 1,
        name: 'Martelo de Thor',
      };

      afterEach(async () => {
        Sinon.restore();
      });

      it('Retorna um objeto', async () => {
        Sinon.stub(Products, 'productById').resolves(PRODUCT);

        const result = await Products.productById(1);
        expect(result).to.be.an('object');
      });

      it('Tem as chaves corretas', async () => {
        Sinon.stub(Products, 'productById').resolves(PRODUCT);

        const result = await Products.productById(1);
        expect(result).to.all.keys('name', 'id');
      });
    });
  });
})