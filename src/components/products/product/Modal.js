import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

// Modal wrapper to overlay the modal on the screen
const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

// Content of the modal with different layout styles for desktop and mobile
const ModalContent = styled.div`
  background-color: white;
  padding: 20px;
  border-radius: 8px;
  width: 80%;
  max-width: 900px;
  text-align: center;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 768px) {
    flex-direction: row;
    text-align: left;
    align-items: flex-start;
  }
`;

// Close button on the top right of the modal
const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background-color: transparent;
  border: none;
  font-size: 24px;
  cursor: pointer;
  color: #333;
`;

// Container for the product image (left side in larger screens, top side in mobile view)
const ImageContainer = styled.div`
  width: 100%;
  max-width: 400px;
  margin-bottom: 20px;

  @media (min-width: 768px) {
    margin-right: 20px;
    margin-bottom: 0;
  }

  img {
    width: 100%;
    height: auto;
    border-radius: 8px;
  }
`;

// Container for product details (right side in larger screens, bottom side in mobile view)
const ProductDetails = styled.div`
  width: 100%;

  h2 {
    font-size: 28px;
    margin: 10px 0;
  }

  .price {
    font-size: 24px;
    font-weight: bold;
    margin: 10px 0;
  }

  p {
    font-size: 16px;
    color: #555;
  }

  .contact-btn {
    margin-top: 20px;
    padding: 10px 20px;
    background-color: #48aa4e;
    color: white;
    font-size: 16px;
    font-weight: bold;
    border: none;
    border-radius: 5px;
    cursor: pointer;

    &:hover {
      background-color: #00b40a;
    }
  }
`;

// Modal component rendering the content
const Modal = ({ product, onClose }) => {
  const navigate = useNavigate();
  return (
    <ModalWrapper onClick={onClose}>
      <ModalContent onClick={(e) => e.stopPropagation()}>
        <CloseButton onClick={onClose}>×</CloseButton>
        
        {/* Left side for the image */}
        <ImageContainer>
          <img src={product.image} alt={product.title} />
        </ImageContainer>
        
        {/* Right side for the product details */}
        <ProductDetails>
          <h2>{product.title}</h2>
          <p>{product.description}</p>
          {/* <div className="price">₹{product.price}</div> */}
          {/* {product.subcategory && <p>{product.subcategory}</p>} */}
          
          {/* Contact Us Button */}
          <button className="contact-btn" onClick={() => navigate('/contact')}>Contact Us</button>
        </ProductDetails>
      </ModalContent>
    </ModalWrapper>
  );
};

export default Modal;
