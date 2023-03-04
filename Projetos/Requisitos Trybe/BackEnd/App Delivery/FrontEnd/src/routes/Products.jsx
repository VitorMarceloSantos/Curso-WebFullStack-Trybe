import React from 'react';
import { Outlet } from 'react-router';
import Footer from '../components/Footer';
import NavBarClient from '../components/NavbarClient';
import '../css/Products.css';

export default function Products() {
  return (
    <section className="products-page">
      <div className="navBar-products-container">
        <NavBarClient />
      </div>
      <div className="outlet-container">
        <Outlet />
      </div>
      <div className="footer-container">
        <Footer />
      </div>
    </section>
  );
}
