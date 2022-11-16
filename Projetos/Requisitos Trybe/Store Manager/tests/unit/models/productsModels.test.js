const { expect } = require('chai');
const sinon = require('sinon');

const connection = require('../../../src/models/connection');
const productModel = require('../../../src/models/product.model');

const productMock = require('./mocks/products.model.mock');

describe('Testes de unidade do model - Products', function () {
  it('Testando - Funcao FindAll(Sucesso)', async function () {
    sinon.stub(connection, 'execute').resolves([productMock.resultFindAll]);

    const result = await productModel.findAll();

    expect(result).to.be.deep.equal(productMock.resultFindAll)
  });
  it('Testando - Funcao FindAll(Fracasso)', async function () {
    sinon.stub(connection, 'execute').resolves([false]);

    const result = await productModel.findAll();

    expect(result).to.be.deep.equal(false)
  })

  it('Testando - Funcao FindAllId(Sucesso)', async function () {
    sinon.stub(connection, 'execute').resolves([[productMock.resultFindAllId]]);

    const result = await productModel.findAllId(1);

    expect(result).to.be.deep.equal(productMock.resultFindAllId)
  });
  it('Testando - Funcao FindAllId(Fracasso)', async function () {
    sinon.stub(connection, 'execute').resolves([[{message: "Product not found"}]]);

    const result = await productModel.findAllId(99);

    expect(result).to.be.deep.equal({message: "Product not found"})
  });

  it('Testando - Funcao addProducts(Sucesso)', async function () {
    sinon.stub(connection, 'execute').resolves([productMock.createProduct.id]);
    
    const result = await productModel.addProducts({name: "ProdutoX"});

    expect(result).to.be.deep.equal(productMock.createProduct.id)
  });

  afterEach(sinon.restore)
})