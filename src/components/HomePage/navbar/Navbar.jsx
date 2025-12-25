// export default Hero;
import React, { useState } from "react";
import styled from "styled-components";
import { RiSearchLine, RiMenu3Line, RiCloseLine } from "react-icons/ri";
import logo from "../../../assets/LOGO.jpg";
import { Link } from "react-router-dom"; // Import react-scroll Link

// Unified Background for Navbar and Hero Section
const Container = styled.section`
  display: flex;
  flex-direction: column;
  background-color: #363636; /* Navy Blue */
  color: white;
  // height: 70vh;
  // margin-bottom: 50px;

  // @media (max-width: 768px) {
  //   margin-bottom: 100px;
  // }
`;

// Navbar Container (Sticky Navbar)
const NavbarContainer = styled.nav`
  position: sticky;
  top: 0;
  left: 0;
  right: 0;
  background-color: white; /* Inherit background from parent */
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
`;

// Logo Styling
// const Logo = styled.img`
//   height: 40px;
//   width: auto;
// `;

// Links Container for larger screens
const LinksContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;

    a {
    color: black;
    padding: 0.5rem 0;
    text-decoration: none;
    font-size: 1.2rem;
    font-weight: 700;
    transition: color 0.3s ease;

    &:hover {
      color: #f1f1f1;
    }

  @media (max-width: 768px) {
    display: none;
  }
`;

// Link Styling
const Links = styled.a`
  color: white;
  font-size: 1rem;
  text-decoration: none;
  transition: color 0.3s ease;

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
    background-color: white;
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

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <Container>
      {/* Navbar */}
      <NavbarContainer>
        {/* Logo */}
        {/* <h1>RoyalFurn</h1> */}
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
          <Link to={"/"}>Home</Link>
          <Link to={"/products"}>Products</Link>
          <Link to={"/contact"}>Contact Us</Link>
        </LinksContainer>

        {/* Mobile Menu Icon */}
        <MobileMenuIcon onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <RiCloseLine /> : <RiMenu3Line />}
        </MobileMenuIcon>

        {/* Mobile Links */}
        <MobileLinks open={menuOpen}>
          <Link to={"/"}>Home</Link>
          <Link to={"/products"}>Products</Link>
          <Link to={"/contact"}>Contact Us</Link>
          {/* <SearchContainer>
            <input type="text" placeholder="Search" />
            <RiSearchLine size={20} />
          </SearchContainer> */}
        </MobileLinks>
      </NavbarContainer>
    </Container>
  );
}

export default Navbar;
