import React from 'react';
import Navbar from '../components/HomePage/navbar/Navbar';
import Footer from '../components/HomePage/footer/Footer';
import styled from 'styled-components';
import PhoneIconComponent from '../components/utils/PhoneIconComponent';

const TermsConditions = () => {
  return (
    <Container>
      <Navbar />
      
      <Content>
        <Title>Terms and Conditions</Title>

        {/* Section 1: Heading, Horizontal line, and List */}
        <Section>
          <StyledHr />
          <SectionTitle>Royal Furn covers this product under the following conditios</SectionTitle>
          <StyledList>
            <li>Manufacturing defects in material.</li>
            <li>Improper workmanship.</li>
            <li>TTerminates & Fungus.</li>
            <li>Color fading if the not subjected directly to sunlight</li>
            <li>Product failure.</li>
          </StyledList>
        </Section>

        {/* Section 2: Heading, Horizontal line, and List */}
        <Section>
          <SectionTitle>Royal Furn does not cover the product under the following conddition</SectionTitle>
          <StyledHr />
          <StyledList>
            <li>Damages due to misuse, tampering, absuse, fire, natural, calamity.</li>
            <li>Scratches, rips etc.</li>
            <li>Negligense, unauthorised usage.</li>
            <li>Continuous contact of water</li>
            <li>Shifting of furniture without dismantling it</li>
            <li>Furntime directly exposed to sunlight.</li>
            <li>Furniture bought from unauthorized dealer of RoyalFurn </li>
          </StyledList>
        </Section>

        {/* Section 3: Heading, Horizontal line, and List */}
        <Section>
          <SectionTitle>NOTE:</SectionTitle>
          <StyledHr />
          <StyledList>
            <li>Products may discontinued without any prior notice.</li>
            <li> The Company has the right to rework / repair / replace only the defective part of the furntime.</li>
          </StyledList>
        </Section>
      </Content>
      <PhoneIconComponent />
      <Footer />
    </Container>
  );
};

export default TermsConditions;

// Styled Components

const Container = styled.div`
  font-family: Arial, sans-serif;
  color: #333;
`;

const Content = styled.div`
  padding: 20px;
  // max-width: 900px;
  margin: 0 auto;
`;

const Title = styled.h1`
  text-align: center;
  margin-bottom: 40px;
`;

const Section = styled.section`
  margin-bottom: 40px;
`;

const SectionTitle = styled.h3`
  font-size: 1.6rem;
  margin-bottom: 10px;
  font-weight: bold;
`;

const StyledHr = styled.hr`
  width: 99 %;
  margin: 10px auto;
  border: 1px solid #ccc;
`;

const StyledList = styled.ul`
  list-style-type: square;
  padding-left: 20px;
  line-height: 1.8;

  li {
    margin-bottom: 10px;
  }
`;
