import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import styled from "styled-components";
import products from "../../../data/Products";
import Modal from "./Modal";
import offerlogo from "../../../assets/LOGO.jpg";
import bedimg1 from "../../../assets/Royal_Furn_Beds/classicseries001.jpg";
import sofaimg1 from "../../../assets/Royal_Furn_Sofas/Five_Seating_Sofa_.jpg";
import chairimg1 from "../../../assets/Royal_Furn_Tables/Big_Table_1.jpg";
import { Link, useLocation } from "react-router-dom";

// Styled Components for Offers Section
const OffersSection = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: white;
  color: black;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  padding: 20px;
  margin-top: 30px;
  // border-radius: 8px;
  border: 1px solid black;
  width: 100%;
  flex-wrap: wrap;

  .offer-left {
    display: flex;
    align-items: center;

    .company-logo img {
      width: 350px;
      height: 150px;
      background-color: #007bff;
      margin-right: 15px;
      display: flex;
      justify-content: center;
      align-items: center;
      color: white;
      font-weight: bold;
      font-size: 20px;
    }
    .discount-info {
      font-size: 25px;
      color: #333;
      border: 1px solid white;
      padding: 45px 15px;
      border-radius: 50%;
      background-color: green;
      color: white;
    }
  }

  .offer-right {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    text-align: start;
    padding-left: 20px;
    gap: 20px;

    .discount {
      color: black;
      font-size: 40px;
      font-weight: bold;
    }
    img {
      width: 400px;
      height: 200px;
    }
  }

  // Mobile and Tablet view adjustments
  @media (max-width: 1024px) {
    gap: 50px;
    .offer-left {
      gap: 50px;
      width: 100%; // Full width for left section on tablet
      margin-bottom: 10px;
    }
    .offer-right {
      gap: 50px;
      width: 100%; // Full width for image on tablet
      justify-content: center;
    }
  }

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 20px;

    .offer-left {
      gap: 10px;
      flex-direction: column;
      width: 100%;
      text-align: center;
      margin-bottom: 15px;
    }

    .offer-right {
      gap: 10px;
      flex-direction: column;
      width: 100%;
      text-align: center;
    }
  }
  @media (max-width: 480px) {
    padding: 20px 0px;
    .offer-left {
      gap: 20px;
      .company-logo img {
        height: 200px;
        width: 300px;
      }
    }
    .offer-right {
      gap: 20px;
      .company-logo img {
        height: 200px;
        width: 280px;
      }
    }
  }
`;

const DiscountCard = styled.div`
  background-color: #ecffdc;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.4);
  text-align: center;
  max-width: 300px;
  margin: 10px;

  .discount {
    font-size: 40px;
    font-weight: bold;
    color: green;
  }

  .contact-info {
    margin-top: 20px;

    .phone-number {
      font-size: 18px;
      margin: 10px 0;
      display: block;
      color: black;
      text-decoration: none;

      &:hover {
        text-decoration: underline;
      }
    }

    .more-info-link {
      margin-top: 15px;
      font-size: 18px;
      color: #007bff;
      text-decoration: none;
      font-weight: bold;

      &:hover {
        text-decoration: underline;
      }
    }
  }
`;

// Update ProductContainer for Flex-wrap
const ProductContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  padding: 20px;
  justify-content: center;

  .product-card {
    width: calc(25% - 20px); // 4 products per row on large screens
  }

  @media (max-width: 1024px) {
    .product-card {
      width: calc(50% - 20px); // 2 products per row on tablet
    }
  }

  @media (max-width: 768px) {
    .product-card {
      width: 100%; // 1 product per row on mobile
    }
  }
`;

const Breadcrumb = styled.div`
  font-size: 18px;
  margin-left: 150px;
  font-weight: bold;
  margin-top: 20px;

  span {
    color: #555;
  }

  a {
    text-decoration: none;
    color: #007bff;
    cursor: pointer;
  }

  @media (max-width: 768px) {
    margin-left: 100px;
  }

  @media (max-width: 500px) {
    margin-left: 50px;
  }
`;

// const SubcategoryFilter = styled.div`
//   margin-bottom: 20px;
//   margin-left: 150px;

//   button {
//     margin-right: 10px;
//     padding: 8px 16px;
//     font-size: 14px;
//     background-color: #e5e4e2;
//     color: black;
//     border: none;
//     cursor: pointer;
//     margin-top: 20px;
//     border-radius: 5px;
//     transition: background-color 0.3s ease, border-color 0.3s ease;

//     &:hover {
//       background-color: #a9a9a9;
//     }

//     &.selected {
//       background-color: #a9a9a9;
//       color: white;
//       border: 2px solid green;
//     }

//     p {
//       font-size: 20px;
//       font-weight: bold;
//     }

//     img {
//       height: 50px;
//       width: auto;
//     }
//   }

//   @media (max-width: 768px) {
//     margin-left: 100px;
//   }

//   @media (max-width: 500px) {
//     margin-left: 20px;
//      button{
//       img {
//       height: 30px;
//       width: auto;
//     }
//     p {
//       font-size: 15px;
//     }
//      }
//   }
// `;

const ProductList = ({ category }) => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to top whenever the route changes
  }, [location]);

  const [selectedSubcategory, setSelectedSubcategory] = useState("All");
  const [selectedProduct, setSelectedProduct] = useState(null);

  const filteredProducts = products.filter(
    (product) =>
      product.category === category &&
      (selectedSubcategory === "All" ||
        product.subcategory === selectedSubcategory)
  );

  // const handleSubcategoryChange = (subcategory) => {
  //   setSelectedSubcategory(subcategory);
  // };

  const handleProductClick = (product) => {
    setSelectedProduct(product);
  };

  const handleModalClose = () => {
    setSelectedProduct(null);
  };

  // Define the image to be used based on the category
  const getCategoryImage = () => {
    switch (category) {
      case "bed":
        return bedimg1;
      case "sofa":
        return sofaimg1;
      case "dining":
        return chairimg1;
      default:
        return bedimg1; // Default image in case category is undefined or new
    }
  };

  // Render the products and insert the offer section after the first 4 products
  const renderProductsWithOffer = () => {
    let productItems = [];
    filteredProducts.forEach((product, index) => {
      productItems.push(
        <div key={product.id} className="product-card">
          <ProductCard
            product={product}
            onClick={() => handleProductClick(product)}
          />
        </div>
      );

      // Insert offer section after the 4th product (index === 3)
      if (index === 3) {
        productItems.push(
          <OffersSection key="offers">
            <div className="offer-left">
              <div className="company-logo">
                <img src={offerlogo} alt="Logo" />
              </div>
              <div className="discount-info">
                Extended <br /> On Demand
              </div>
            </div>
            <div className="offer-right">
              <DiscountCard>
                <div className="discount">UPTO 15% OFF</div>
                <div className="contact-info">
                  <a href="tel:+91 9949459796" className="phone-number">
                    Call Now: +91 9949459796
                  </a>
                  <a href="tel:+91 9949817760" className="phone-number">
                    Or Call: +91 9949817760
                  </a>
                  {/* <Link to="https://maps.app.goo.gl/Fqm4dJNKadgvH13a7?g_st=iw" className="more-info-link">
                    Visit our Store
                  </Link> */}
                  <a
                    href="https://maps.app.goo.gl/Fqm4dJNKadgvH13a7?g_st=iw"
                    className="more-info-link"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Click to Visit our Store
                  </a>
                </div>
              </DiscountCard>
              {/* <div className="discount">UPTO 15% OFF</div> */}
              <div className="company-logo">
                <img src={getCategoryImage()} alt="Category Offer" />
              </div>
            </div>
          </OffersSection>
        );
      }
    });
    return productItems;
  };

  return (
    <>
      <Breadcrumb>
        {/* <span>Home → </span> */}
        <Link to={"/"}>Home → </Link>
        <span>{category.charAt(0).toUpperCase() + category.slice(1)}</span>
      </Breadcrumb>

      {/* Subcategory filter buttons */}
      {/* <SubcategoryFilter>
        {category === "bed" && (
          <>
            <button
              onClick={() => handleSubcategoryChange("All")}
              className={selectedSubcategory === "All" ? "selected" : ""}
            >
              <img src={bedimg1} alt="All Beds" />
              <p>All Beds</p>
            </button>
            <button
              onClick={() => handleSubcategoryChange("singlecot")}
              className={selectedSubcategory === "singlecot" ? "selected" : ""}
            >
              <img src={bedimg2} alt="Single Cot" />
              <p>Single Cot</p>
            </button>
            <button
              onClick={() => handleSubcategoryChange("doublecot")}
              className={selectedSubcategory === "doublecot" ? "selected" : ""}
            >
              <img src={bedimg3} alt="Double Cot" />
              <p>Double Cot</p>
            </button>
          </>
        )}
        {category === "sofa" && (
          <>
            <button
              onClick={() => handleSubcategoryChange("All")}
              className={selectedSubcategory === "All" ? "selected" : ""}
            >
              <img src={sofaimg1} alt="All Sofas" />
              <p>All Sofas</p>
            </button>
            <button
              onClick={() => handleSubcategoryChange("1seating")}
              className={selectedSubcategory === "1seating" ? "selected" : ""}
            >
              <img src={sofaimg2} alt="1 Seating" />
              <p>Single Seating</p>
            </button>
            <button
              onClick={() => handleSubcategoryChange("5seating")}
              className={selectedSubcategory === "5seating" ? "selected" : ""}
            >
              <img src={sofaimg1} alt="5 Seating" />
              <p>5 Seating</p>
            </button>
            <button
              onClick={() => handleSubcategoryChange("Sofabed")}
              className={selectedSubcategory === "Sofabed" ? "selected" : ""}
            >
              <img src={sofaimg3} alt="sofa bed" />
              <p>sofa bed</p>
            </button>
          </>
        )}
        {category === "dining" && (
          <>
            <button
              onClick={() => handleSubcategoryChange("All")}
              className={selectedSubcategory === "All" ? "selected" : ""}
            >
              <img src={chairimg1} alt="All dining" />
              <p>All Dining</p>
            </button>
            <button
              onClick={() => handleSubcategoryChange("small")}
              className={selectedSubcategory === "small" ? "selected" : ""}
            >
              <img src={chairimg3} alt="Small Dining" />
              <p>Small Dining Tables</p>
            </button>
            <button
              onClick={() => handleSubcategoryChange("big")}
              className={selectedSubcategory === "big" ? "selected" : ""}
            >
              <img src={chairimg2} alt="Dining dining" />
              <p>Big Dining Tables</p>
            </button>
          </>
        )}
      </SubcategoryFilter> */}

      <ProductContainer>{renderProductsWithOffer()}</ProductContainer>

      {/* Modal to show product details */}
      {selectedProduct && (
        <Modal product={selectedProduct} onClose={handleModalClose} />
      )}
    </>
  );
};

export default ProductList;
