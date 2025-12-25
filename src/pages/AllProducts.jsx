import React, { useState } from "react";
import styled from "styled-components";
import products from "../data/Products";
import ProductCard from "../components/products/product/ProductCard";
import Navbar from "../components/HomePage/navbar/Navbar";
import Footer from "../components/HomePage/footer/Footer";
import Modal from "../components/products/product/Modal";
import PhoneIconComponent from "../components/utils/PhoneIconComponent";

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
  padding: 30px 0px 10px 0px;
  color: black;
  text-align: center;
  background-color: #e8e8e8;
`;

const SearchBar = styled.div`
  display: flex;
  justify-content: center;
  margin: 20px 0px;

  input {
    padding: 0.5rem 1rem;
    border-radius: 5px;
    border: 1px solid #ccc;
    width: 50%;
    font-size: 1.1rem;
  }

  @media (max-width: 768px) {
    width: 80%;
  }
`;

const AllProducts = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  const handleProductClick = (product) => {
    setSelectedProduct(product);
  };

  const handleModalClose = () => {
    setSelectedProduct(null);
  };

  // Filter products based on the search term and category
  const filterProducts = (searchTerm) => {
    if (!searchTerm) return products;

    // Convert search term to lowercase for case-insensitive matching
    const lowerCaseTerm = searchTerm.toLowerCase();

    return products.filter((product) => {
      const categoryLowerCase = product.category.toLowerCase();

      // Check if the search term matches the category (partial match)
      return categoryLowerCase.includes(lowerCaseTerm);
    });
  };

  const filteredProducts = filterProducts(searchTerm);

  return (
    <>
      <Navbar />
      <Heading>All Products</Heading>

      {/* Search bar */}
      <SearchBar>
        <input
          type="text"
          placeholder="Search by category (Ex: sofa, bed, dining)"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </SearchBar>

      <ProductGrid>
        {filteredProducts.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onClick={() => handleProductClick(product)}
          />
        ))}

        {selectedProduct && (
          <Modal product={selectedProduct} onClose={handleModalClose} />
        )}
      </ProductGrid>
      <PhoneIconComponent />
      <Footer />
    </>
  );
};

export default AllProducts;
