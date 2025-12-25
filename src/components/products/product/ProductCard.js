import React from "react";
import styled from "styled-components";

const Card = styled.div`
  position: relative;
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 16px;
  background-color: #ECFFDC;
  cursor: pointer;

  img {
    width: 100%;
    height: auto;
    border-radius: 8px;
  }

  .best-seller {
    position: absolute;
    top: 20px;
    left: 20px;
    background-color: #28a745;
    color: white;
    padding: 5px 10px;
    font-weight: bold;
    border-radius: 5px;
  }

  h3 {
    font-size: 18px;
    margin: 10px 0;
  }

  p {
    font-size: 16px;
    color: #777;
  }

  .price {
    font-size: 18px;
    font-weight: bold;
    color: #333;
  }
`;

const ProductCard = ({ product, onClick }) => {
  return (
    <Card onClick={onClick}>
      <img src={product.image} alt={product.title} />
      {product.popular && <div className="best-seller">Best Seller</div>}
      <h3>{product.title}</h3>
      <p>{product.description}</p>
      {/* <div className="price"> ${product.price}</div> */}
    </Card>
  );
};

export default ProductCard;
