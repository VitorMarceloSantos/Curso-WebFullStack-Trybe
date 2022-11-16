const { expect } = require('chai');
const sinon = require('sinon');

// const connection = require('../../../src/models/connection');
const productService = require('../../../src/services/product.service');

const productMock = require('./mocks/products.service.mock');

describe('Testes de unidade do service - Products', function () {
  it('Testando - Funcao FindAll(Sucesso)', async function () {
    sinon.stub(productService, 'findAll').resolves(productMock.resultFindAll);

    const result = await productService.findAll();

    expect(result).to.be.deep.equal(productMock.resultFindAll)
  });
  it('Testando - Funcao FindAll(Fracasso)', async function () {
    sinon.stub(productService, 'findAll').resolves(false);

    const result = await productService.findAll();

    expect(result).to.be.deep.equal(false)
  })

  it('Testando - Funcao FindAllId(Sucesso)', async function () {
    sinon.stub(productService, 'findAllId').resolves(productMock.resultFindAllId);

    const result = await productService.findAllId(1);

    expect(result).to.be.deep.equal(productMock.resultFindAllId)
  });
  it('Testando - Funcao FindAllId(Fracasso)', async function () {
    sinon.stub(productService, 'findAll').resolves(false);

    const result = await productService.findAllId(99);

    expect(result).to.be.deep.equal(false)
  });

  it('Testando - Funcao addProducts(Sucesso)', async function () {
    sinon.stub(productService, 'addProducts').resolves(productMock.createProduct);

    const result = await productService.addProducts({name: "ProdutoX"});

    expect(result).to.be.deep.equal(productMock.createProduct)
  });
  it('Testando - Funcao addProducts(Fracasso)', async function () {
    sinon.stub(productService, 'addProducts').resolves(false);

    const result = await productService.addProducts();

    expect(result).to.be.deep.equal(false)
  })

  afterEach(sinon.restore)
})