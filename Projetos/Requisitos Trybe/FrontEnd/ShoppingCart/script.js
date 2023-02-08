let objStorage = {}; // irá armazenar os itens adicionados no carrrinho
const cartShopp = document.querySelector('.cart__items');
let totalPrice = 0; // Variável que irá armazenar o total do preços
const priceHtml = document.querySelector('#total');
const btnEmpty = document.querySelector('.empty-cart');

const emptyCart = () => {
  if (cartShopp.childElementCount > 0) {
    while (cartShopp.firstChild) { // removendo todos os elementos do carrinho
      cartShopp.removeChild(cartShopp.firstChild);
    }
    localStorage.clear(); // apagar informações do localStorage
    totalPrice = 0;
    priceHtml.textContent = totalPrice; // alterando no HTML
  }
};

const removeCartItem = (idItem) => {
  const cartItems = JSON.parse(getSavedCartItems()); // convertendo os valores do localStorage
  for (let i = 0; i < Object.keys(cartItems).length; i += 1) {
    Object.keys(cartItems).forEach((id) => {
      if (id === idItem) {
        delete cartItems[id]; // quando for variável utiliza o [] no objeto.
      }
    });
  }
  localStorage.clear(); // apagar informações do localStorage
  objStorage = cartItems; // atualizando o objstorage
  saveCartItems(objStorage); // armazenar todo o objStorage 
};
const cartItemClickListener = (event) => { // Requisito 5
  const priceTxt = (event.target.textContent).split('PRICE: $'); // o preço está no array price[1], e converte para numero
  const priceNumber = Number(priceTxt[1]);
  totalPrice -= priceNumber; // removendo o valor do produto
  priceHtml.textContent = totalPrice; // alterando no HTML
  const idItem = event.target.classList[1]; // irá armazenar o valor do sku do item
  removeCartItem(idItem);
  cartShopp.removeChild(event.target); // removendo o elemento filho clicado
};

const refreshCart = () => { // atualizando a pagina, e o carrinho permanece
  const cartItems = JSON.parse(getSavedCartItems()); // convertendo os valores do localStorage
  const arrayKeys = Object.keys(cartItems);
  for (let i = 0; i < arrayKeys.length; i += 1) {
    const priceTxt = (cartItems[arrayKeys[i]]).split('PRICE: $'); // o preço está no array price[1], e converte para numero
    totalPrice += Number(priceTxt[1]);
    priceHtml.textContent = totalPrice; // adicionando no HTML
    const li = document.createElement('li');
    li.className = 'cart__item';
    li.classList.add(arrayKeys[i]);
    li.textContent = cartItems[arrayKeys[i]];
    li.addEventListener('click', cartItemClickListener); // utlizada para excluir o item no carrinho
    cartShopp.appendChild(li);
  }
};

const verifyStorage = () => { // caso seja maior que 0 é porque há itens adicionados no carrinho
  if (JSON.parse(getSavedCartItems()) !== null) { // verifica se o localStorage está vazio
    refreshCart();
  }
};

const createProductImageElement = (imageSource) => {
  const img = document.createElement('img');
  img.className = 'item__image';
  img.src = imageSource;
  return img;
};

const createCustomElement = (element, className, innerText, id) => {
  const e = document.createElement(element);
  e.className = className;
  e.innerText = innerText;
  e.id = id; // adicionando o id ao elemento button
  return e;
};

const createCartItemElement = ({ sku, name, salePrice }) => {
  totalPrice += Number(salePrice); // Somando os produtos do carrinho
  priceHtml.textContent = totalPrice; // adicionando no HTML
  const li = document.createElement('li');
  const objetcTemp = `SKU: ${sku} | NAME: ${name} | PRICE: $${salePrice}`;
  li.className = 'cart__item';
  li.innerText = objetcTemp;
  li.classList.add(sku); // adicionando uma classe com o id do item, para realizar a exclusão do array Storage;
  li.addEventListener('click', cartItemClickListener); // utlizada para excluir o item no carrinho
  objStorage[sku] = objetcTemp; // adicionando um novo produto ao objStorage(chave: id do item / valor: variável objetcTemp
  saveCartItems(objStorage); // armazenar todo o objStorage
  return li;
};

const addCart = async (e) => { // Requisito 04
  // const items = document.querySelector('.cart__items');
  const objeto = await fetchItem(e.target.id); // e necessário o await, pois primeiro executa a função i
  const { id, title, price } = objeto;
  cartShopp.appendChild(createCartItemElement({ sku: id, name: title, salePrice: price }));
};

const addEventBtn = (button) => {
  button.addEventListener('click', addCart);
};

const createProductItemElement = ({ sku, name, image }) => {
  const section = document.createElement('section');
  section.className = 'item';
  section.appendChild(createCustomElement('span', 'item__sku', sku));
  section.appendChild(createCustomElement('span', 'item__title', name));
  section.appendChild(createProductImageElement(image));
  // Foi criada a variável button para que seja adicionado o evento de click
  const button = createCustomElement('button', 'item__add', 'Adicionar ao carrinho!', sku);
  addEventBtn(button);
  section.appendChild(button);
  return section;
};

const addItems = async () => { // Requisito 02
  const items = document.querySelector('.items');
  const objeto = await fetchProducts('computador'); // e necessário o await, pois primeiro executa a função fetchProducts
  const carregando = document.querySelector('.loading');
  carregando.remove();
  (objeto.results).forEach((elemento) => {
    const { id, title, thumbnail } = elemento;
    items.appendChild(createProductItemElement({ sku: id, name: title, image: thumbnail }));
  });
};

window.onload = () => { 
  addItems();
  verifyStorage();
  btnEmpty.addEventListener('click', emptyCart); // adicionanando escutador de evento
};
