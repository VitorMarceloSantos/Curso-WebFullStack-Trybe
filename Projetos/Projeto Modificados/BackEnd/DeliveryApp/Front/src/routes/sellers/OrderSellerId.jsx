import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router'; // Pegar o parâmetro da URL
import '../../css/routes/products/OrderId.css';
import { requestGet, setToken, requestPut } from '../../services/request';

export default function OrderId() {
  const [saleId, setSaleId] = useState('');
  const [products, setProducts] = useState([]);
  const { id, totalPrice, saleDate } = saleId;
  const [verifyStatus, setVerifyStatus] = useState('');
  const { id: idUrl } = useParams(); // retorna o Id da URL
  const CUSTOMER = 'seller_order_details';
  const CUSTOMER_ORDER = `${CUSTOMER}__element-order`;

  useEffect(() => {
    (async () => {
      try {
        const { token } = JSON.parse(localStorage.getItem('user') || false);
        setToken(token);
        await requestGet(`/sales/${idUrl}`)
          .then((response) => {
            setSaleId(response);
            setVerifyStatus(response.status);
          })
          .then(async () => {
            await requestGet(`/products/sales/${idUrl}`)
              .then((response) => {
                setProducts(response);
              });
          });
      } catch (error) {
        console.log('Error:', error);
      }
    }
    )();
  }, [idUrl]);

  // Adicionando zeros a esquerda(Tamanho máximo do pedido 4 digitos)
  const editNumberOrder = (idParams) => {
    const idString = String(idParams);
    const NUMBER_FOUR = 4;
    let count = idString.length;
    let idWithZero = idString;

    while (count < NUMBER_FOUR) {
      idWithZero = `0${idWithZero}`;
      count += 1;
    }
    return idWithZero;
  };

  const editDate = (date) => {
    const regexAno = /^(\d{4})-/;
    const [ano] = date.match(regexAno).slice(1);
    const regexMesDia = /^(\d{4})-(\d{2})-(\d{2})/;
    const [, , mes, dia] = date.match(regexMesDia);
    return `${dia}/${mes}/${ano}`;
  };

  // const preparingCheck = async () => {
  //   const statusOrder = 'Preparando';
  //   const { token } = JSON.parse(localStorage.getItem('user') || false);
  //   setToken(token);
  //   await requestPut(`/orders/seller/${id}/${statusOrder}`, {})
  //     .then(({ newStatus }) => {
  //       setVerifyStatus(newStatus);
  //     });
  // };

  // const dispatchCheck = async () => {
  //   const statusOrder = 'Em-Trânsito';
  //   const { token } = JSON.parse(localStorage.getItem('user') || false);
  //   setToken(token);
  //   console.log('Funç]ao');
  //   await requestPut(`/orders/seller/${id}/${statusOrder}`, {})
  //     .then(({ newStatus }) => {
  //       setVerifyStatus(newStatus);
  //     });
  // };

  const updateState = async (statusOrder) => {
    const { token } = JSON.parse(localStorage.getItem('user') || false);
    setToken(token);
    await requestPut(`/orders/seller/${id}/${statusOrder}`, {})
      .then(({ newStatus }) => {
        setVerifyStatus(newStatus);
      });
  };

  return (
    <div>
      {(saleId && products.length !== 0) ? (
        <div>
          <h1>Detalhe do Pedido</h1>
          <div className="divDadosPedido">
            <p
              data-testid={ `${CUSTOMER_ORDER}-details-label-order-id` }
            >
              {`PEDIDO ${editNumberOrder(id)}`}
            </p>
            <p
              data-testid={ `${CUSTOMER_ORDER}-details-label-order-date` }
            >
              {editDate(saleDate)}
            </p>
            <p
              data-testid={ `${CUSTOMER_ORDER}-details-label-delivery-status` }
            >
              {verifyStatus}
            </p>
            <button
              data-testid={ `${CUSTOMER}__button-preparing-check` }
              type="button"
              onClick={ () => updateState('Preparando') }
              disabled={ verifyStatus !== 'Pendente' } // verfica se o status é Pendente
            >
              PREPARAR PEDIDO
            </button>
            <button
              data-testid={ `${CUSTOMER}__button-dispatch-check` }
              type="button"
              disabled={ verifyStatus !== 'Preparando' }
              onClick={ () => updateState('Em-Trânsito') }
            >
              SAIU PARA ENTREGA
            </button>
          </div>
          <table className="tableCar">
            <thead>
              <tr>
                <th className="thItem">Item</th>
                <th>Descrição</th>
                <th>Quantidade</th>
                <th>Valor Unitário</th>
                <th>Sub-total</th>
              </tr>
            </thead>
            <tbody>
              {products.map(({ products: productsId, quantity }, index) => (
                <tr key={ index }>
                  <td
                    className="tdItem"
                    data-testid={ `${CUSTOMER_ORDER}-table-item-number-${index}` }
                  >
                    {index + 1}
                  </td>
                  <td
                    className="tdDescricao"
                    data-testid={ `${CUSTOMER}__element-order-table-name-${index}` }
                  >
                    {productsId.name}
                  </td>
                  <td
                    className="tdQuantidade"
                    data-testid={ `${CUSTOMER}__element-order-table-quantity-${index}` }
                  >
                    {productsId.quantity}
                  </td>
                  <td
                    className="tdPrice"
                    data-testid={ `${CUSTOMER}__element-order-table-unit-price-${index}` }
                  >
                    {(productsId.price).replace('.', ',')}
                  </td>
                  <td
                    className="tdSubtotal"
                    data-testid={ `${CUSTOMER}__element-order-table-sub-total-${index}` }
                  >
                    {String((quantity * productsId.price).toFixed(2)).replace('.', ',')}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <p>Total:</p>
          <p
            className="chekcout-total-price"
            data-testid={ `${CUSTOMER}__element-order-total-price` }
          >
            {totalPrice.replace('.', ',')}
          </p>
        </div>
      ) : (
        <h3>Carregando</h3>
      ) }
    </div>
  );
}
