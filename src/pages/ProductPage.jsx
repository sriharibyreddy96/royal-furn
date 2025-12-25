// src/pages/ProductPage.js
import React from 'react';
import { useParams } from 'react-router-dom';
import ProductList from '../components/products/product/ProductList';
import Navbar from '../components/HomePage/navbar/Navbar';
import Footer from '../components/HomePage/footer/Footer';
import PhoneIconComponent from '../components/utils/PhoneIconComponent';

const ProductPage = () => {
  const { category } = useParams(); // Extract category from URL
  
  return (
    <>
    <Navbar />
    <div>
      {/* <h2>{category.charAt(0).toUpperCase() + category.slice(1)} Products</h2> */}
      <ProductList category={category} />
    </div>
    <PhoneIconComponent />

    <Footer />
    </>
  );
};

export default ProductPage;
