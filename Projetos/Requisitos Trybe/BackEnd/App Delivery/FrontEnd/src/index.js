import React from 'react';
import ReactDOM from 'react-dom';
import {
  createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import App from './App';
import Login from './routes/Login';
import Products from './routes/Products';
import Register from './routes/Register';
import List from './routes/products/List';
import Checkout from './routes/products/Checkout';
import Orders from './routes/products/Orders';
import OrderId from './routes/products/OrderId';

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: '/',
        element: <Navigate to="/login" replace />, // redirecionando a rota
      },
      {
        path: '/login',
        element: <Login />,
      },
      {
        path: '/register',
        element: <Register />,
      },
      {
        element: <Products />,
        // path: '/customer/products',
        children: [
          {
            path: '/customer/products',
            element: <List />,
          },
          {
            path: '/customer/checkout',
            element: <Checkout />,
          },
          {
            path: '/customer/orders/',
            element: <Orders />,
          },
          {
            path: '/customer/orders/:id',
            element: <OrderId />,
          },
        ],
      },
      // {
      //   path: '/customer/products',
      //   element: <Products />,
      // },
    ],
  },
]);

ReactDOM.render(
  <React.StrictMode>
    <RouterProvider router={ router } />
  </React.StrictMode>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
