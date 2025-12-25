import React, { useState } from "react";
import styled from "styled-components";
import { RiSearchLine, RiMenu3Line, RiCloseLine } from "react-icons/ri";
import Hero_Img from "../../../assets/hero_bed2.png";
import { Link } from "react-scroll"; // Import react-scroll Link
import logo from "../../../assets/LOGO.jpg";

// Unified Background for Navbar and Hero Section
const Container = styled.section`
  display: flex;
  flex-direction: column;
  background-color: #363636;
  color: white;
  margin-bottom: 50px;
`;

// Navbar Container (Sticky Navbar)
const NavbarContainer = styled.nav`
  position: sticky;
  top: 0;
  left: 0;
  right: 0;
  background-color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  z-index: 1000;
  transition: background-color 0.3s ease;

  img {
    height: 50px;
    width: 150px;
  }

  @media (max-width: 768px) {
    flex-direction: row;
    align-items: flex-start;
    padding: 1rem;
  }
  @media (max-width: 500px) {
    img {
      height: 40px;
      width: 100px;
    }
  }
`;

// Links Container for larger screens
const LinksContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;

  @media (max-width: 768px) {
    display: none;
  }
`;

// Link Styling
const LinkStyled = styled(Link)`
  color: black;
  font-size: 1.2rem;
  font-weight: 700;
  text-decoration: none;
  transition: color 0.3s ease;
  cursor: pointer;

  &:hover {
    color: #f1f1f1;
  }
`;

// Search Bar and Icon Styling
const SearchContainer = styled.div`
  display: flex;
  margin: 0px 10px;
  align-items: center;
  position: relative;
  max-width: 400px;
  border: 1px solid black;
  border-radius: 5px;
  width: 100%; /* Allow the search bar to expand and contract dynamically */

  input {
    padding: 0.5rem 1rem;
    border-radius: 5px;
    border: none;
    width: 100%; /* Make the search bar responsive */
    outline: none;
    // background-color: #001f3d;
    color: black;
    font-size: 1rem;
  }

  svg {
    position: absolute;
    right: 10px;
    top: 50%;
    transform: translateY(-50%);
    color: #fff;
  }

  @media (max-width: 768px) {
    max-width: 250px; /* Resize search bar on mobile */
    input {
      width: 100%; /* Ensure the search bar uses available width */
    }
  }
`;

// Mobile Menu Icon (Hamburger)
const MobileMenuIcon = styled.div`
  display: none;
  cursor: pointer;

  @media (max-width: 768px) {
    display: block;
    color: black;
    font-size: 2rem;
  }
`;

// Mobile Menu Links
const MobileLinks = styled.div`
  display: ${(props) => (props.open ? "flex" : "none")};
  flex-direction: column;
  background-color: #001f3d;
  position: absolute;
  top: 60px;
  right: 0;
  padding: 1rem;
  width: 200px;

  a {
    color: white;
    padding: 0.5rem 0;
    text-decoration: none;
    font-size: 1rem;
    transition: color 0.3s ease;

    &:hover {
      color: #f1f1f1;
    }
  }
`;

// Hero Section Container
const HeroContainer = styled.section`
  display: flex;
  justify-content: space-between;
  padding: 0 2rem;
  color: white;
  margin-left: 60px;
  margin-right: 60px;
  margin-top: 50px;
  flex-wrap: wrap; // Allows stacking of elements
  position: relative; // To position the text on top of the image

  // Background image and watermark opacity for smaller screens
  @media (max-width: 1200px) {
    flex-direction: column;
    background-image: url(${Hero_Img});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    opacity: 0.5; // Watermark opacity for the image
  }

  @media (max-width: 768px) {
    padding: 1rem;
  }

  @media (max-width: 600px) {
    flex-direction: column-reverse; // Image on top and text below on mobile
    margin-left: 10px;
    margin-right: 10px;
    margin-top: 10px;
    background-size: contain; // Adjust background size for mobile
  }
`;

// Text Section in Hero
const TextSection = styled.div`
  flex: 1;
  max-width: 700px;
  margin: 50px 0px;
  position: relative;

  h1 {
    font-size: 3rem;
    margin-bottom: 20px;
    z-index: 1; // Ensure it stays on top
  }

  p {
    font-size: 1.2rem;
    margin-bottom: 20px;
    z-index: 1; // Ensure it stays on top
  }

  button {
    background-color: White;
    color: Black;
    padding: 15px 30px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s;
    font-size: 18px;
    font-weight: bold;
    z-index: 1; // Ensure it stays on top

    &:hover {
      background-color: #333;
      border: 1px solid white;
      color: white;
    }
  }

  @media (max-width: 600px) {
    h1 {
      font-size: 2rem; // Smaller font size for mobile
    }
    p {
      font-size: 1rem; // Smaller font size for mobile
    }
    button {
      font-size: 16px; // Adjust button font size
      padding: 12px 20px;
    }
  }
`;

// Image Section in Hero (this section is now removed below 1200px)
const ImageSection = styled.div`
  flex: 1;
  position: relative;

  img {
    max-width: 100%;
    height: auto;
    object-fit: cover;
    position: absolute;
    bottom: -50px;
    left: 0;
    right: 0;
  }

  @media (max-width: 1200px) {
    display: none; // Hide image below 1200px, using background-image instead
  }

  @media (max-width: 600px) {
    margin-top: 20px;
    position: relative; // Reset image positioning for stacking
  }
`;

function Hero() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <Container>
      {/* Navbar */}
      <NavbarContainer>
        {/* Logo */}
        {/* <h1>RoyalFurn</h1> */}
        {/* <Link to='/'><img src={logo} alt='Logo' /></Link> */}
        <Link to={"/"}>
          <img src={logo} alt="Logo" />
        </Link>

        {/* Search Bar (Desktop) */}
        <SearchContainer>
          <input type="text" placeholder="Search" />
          <RiSearchLine size={20} />
        </SearchContainer>

        {/* Desktop Links */}
        <LinksContainer>
          <LinkStyled to="/" smooth={true} duration={500}>
            Home
          </LinkStyled>
          <LinkStyled to="products" smooth={true} duration={500}>
            Products
          </LinkStyled>
          <LinkStyled to="contact" smooth={true} duration={500}>
            Contact Us
          </LinkStyled>
        </LinksContainer>

        {/* Mobile Menu Icon */}
        <MobileMenuIcon onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <RiCloseLine /> : <RiMenu3Line />}
        </MobileMenuIcon>

        {/* Mobile Links */}
        <MobileLinks open={menuOpen}>
          <LinkStyled to="/" smooth={true} duration={500}>
            Home
          </LinkStyled>
          <LinkStyled to="products" smooth={true} duration={500}>
            Products
          </LinkStyled>
          <LinkStyled to="contact" smooth={true} duration={500}>
            Contact Us
          </LinkStyled>
        </MobileLinks>
      </NavbarContainer>

      {/* Hero Section */}
      <HeroContainer id="home">
        <TextSection>
          <h1>Imported concept with Indian Strength</h1>
          <p>Quality for your satisfaction</p>
          <button>Explore Products</button>
        </TextSection>
        <ImageSection>
          <img src={Hero_Img} alt="Furniture" />
        </ImageSection>
      </HeroContainer>
    </Container>
  );
}

export default Hero;
