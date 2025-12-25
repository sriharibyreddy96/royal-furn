import React, { useState } from "react";
import styled from "styled-components";
import products from "../../../data/Products";
import ProductCard from "../../products/product/ProductCard";
import Modal from "../../products/product/Modal";

// Styled component for grid layout
const ProductGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  gap: 20px;
  padding: 50px 100px;
  background-color: #e8e8e8;

  @media (max-width: 600px) {
    padding: 50px;
  }
`;

const Heading = styled.h1`
  font-size: 35px;
  margin-bottom: 10px;
  color: black;
  text-align: center;
`;

const PopularProducts = () => {
  // State for managing the selected product
  const [selectedProduct, setSelectedProduct] = useState(null);

  // Filter products where 'popular' is true
  const popularProducts = products.filter((product) => product.popular);

  // Limit to 8-10 popular products (up to 10, if available)
  const productsToDisplay = popularProducts.slice(0, 10); // Can display up to 10 popular products

  const handleProductClick = (product) => {
    setSelectedProduct(product);
  };

  const handleModalClose = () => {
    setSelectedProduct(null);
  };

  return (
    <>
      <Heading>Popular Products</Heading>
      <ProductGrid>
        {productsToDisplay.length > 0 ? (
          productsToDisplay.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onClick={() => handleProductClick(product)}
            />
          ))
        ) : (
          <p>No popular products available.</p>
        )}

        {selectedProduct && <Modal product={selectedProduct} onClose={handleModalClose} />}
      </ProductGrid>
    </>
  );
};

export default PopularProducts;
