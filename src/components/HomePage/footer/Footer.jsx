// src/components/Footer.js
import React from "react";
import styled from "styled-components";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import { SiGoogleplay, SiAppstore } from "react-icons/si";
import logo from '../../../assets/LOGO.jpg';

// Styled Components for Footer

const FooterContainer = styled.footer`
  background-color: #ECFFDC;
  padding: 40px 60px;
  font-family: Arial, sans-serif;
  color: black;
`;

const FooterTop = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 30px;
  margin-bottom: 20px;

  @media (max-width: 998px) {
    flex-direction: column;
  }
`;

const FooterLeft = styled.div`
  flex: 1;
  min-width: 200px;

  img{
  height: 100px;
  width: 200px;
  margin-bottom: 10px;
  }
`;

const FooterRight = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 30px;
  flex: 1;
  min-width: 200px;

  @media (max-width: 558px) {
    flex-direction: column;
  }
`;

const FooterBottom = styled.div`
  border-top: 1px solid #ddd;
  padding-top: 20px;
  text-align: center;
`;

const FooterHeading = styled.h1`
  font-size: 1.4rem;
  margin-bottom: 15px;
`;

const FooterSubHeading = styled.h2`
  font-size: 1.6rem;
  margin-bottom: 10px;
`;

const FooterText = styled.p`
  font-size: 1rem;
  max-width: 280px;
`;

const SocialIcons = styled.div`
  display: flex;
  gap: 20px;
  margin-top: 10px;

  a {
    font-size: 1.5rem;
    color: #333;
    text-decoration: none;

    &:hover {
      color: #0073e6;
    }
  }
`;

const InfoLinks = styled.div`
  display: flex;
  flex-direction: column;

  a {
    font-size: 1rem;
    margin: 5px 0;
    color: #333;
    text-decoration: none;

    &:hover {
      color: #0073e6;
    }
  }
`;

const AppCard = styled.div`
  display: flex;
  gap: 15px;
`;

const AppCardItem = styled.div`
  background-color: #fff;
  padding: 15px;
  border: 1px solid #ddd;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 150px;
  border-radius: 8px;

  .icon {
    font-size: 2rem;
    color: #333;
  }

  p {
    margin-top: 10px;
    font-size: 0.9rem;
    color: #333;
  }

@media (max-width: 558px) {
  width: 120px;
  padding: 10px;
`;

const HorizontalLine = styled.hr`
  width: 100%;
  margin: 20px 0;
  border: 0;
  border-top: 1px solid #ddd;
`;

const FooterYear = styled.p`
  font-size: 1rem;
  color: #888;
`;

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <FooterContainer>
      {/* Top Section */}
      <FooterTop>
        {/* Left Section */}
        <FooterLeft>
          {/* <FooterSubHeading>RoyalFurn</FooterSubHeading> */}
          <img src={logo} alt=""/>
          <FooterText>
          Quality for your satisfaction
          </FooterText>
          <SocialIcons>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <FaFacebook />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <FaTwitter />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <FaInstagram />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <FaLinkedin />
            </a>
          </SocialIcons>
        </FooterLeft>

        {/* Right Section */}
        <FooterRight>
          {/* Left part - Information */}
          <div>
            <FooterHeading>Information</FooterHeading>
            <InfoLinks>
              <a href="/contact">Contact</a>
              <a href="/terms">Terms and Conditions</a>
            </InfoLinks>
          </div>

          {/* Right part - Get Online App */}
          <div>
            <FooterHeading>Get Online App</FooterHeading>
            <AppCard>
              <AppCardItem>
                <div className="icon">
                  <SiGoogleplay />
                </div>
                <p>Google Play</p>
              </AppCardItem>
              <AppCardItem>
                <div className="icon">
                  <SiAppstore />
                </div>
                <p>App Store</p>
              </AppCardItem>
            </AppCard>
          </div>
        </FooterRight>
      </FooterTop>

      {/* Bottom Section */}
      <FooterBottom>
        <FooterYear>All Rights Reserved - RoyalFurn © {currentYear}</FooterYear>
      </FooterBottom>
    </FooterContainer>
  );
};

export default Footer;
