import React from 'react';
import styled from 'styled-components';
import locationImg from '../../../assets/location1.png';

// Styled-components for the entire container
const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #f4f4f4;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin: 20px auto;
  max-width: 1200px;
  width: 100%;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

// Styled-components for the image
const NavigationImage = styled.img`
  width: 500px;
  height: 300px;
  object-fit: cover;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin-right: 20px;
  cursor: pointer;  // Make image clickable

  @media (max-width: 768px) {
    width: 280px;
    height: 150px;
    margin-bottom: 15px;
  }
`;

// Styled-components for the text container (list)
const InfoContainer = styled.div`
  flex: 1;
  padding: 15px;
  max-width: 500px;

  @media (max-width: 768px) {
    max-width: 100%;
    text-align: center;
  }
`;

// Styled-components for the heading
const Heading = styled.h2`
  font-size: 24px;
  color: #333;
  margin-bottom: 10px;
  text-align: left;

  @media (max-width: 768px) {
    text-align: center;
  }
`;

// Styled-components for the list
const InfoList = styled.ul`
  list-style-type: none;
  padding-left: 0;
  font-size: 16px;
  color: #666;

  li {
    margin: 8px 0;
  }

  @media (max-width: 768px) {
    font-size: 14px;
    text-align: start;
  }
`;

const GoogleNav = () => {
  const googleMapsUrl = 'https://maps.app.goo.gl/Fqm4dJNKadgvH13a7?g_st=iw'; // Your Google Maps location URL

  return (
    <Container>
      {/* Left Image for Navigation */}
      <div>
        <a href={googleMapsUrl} target="_blank" rel="noopener noreferrer">
          <NavigationImage src={locationImg} alt="Location" />
        </a>
      </div>

      {/* Right Text Content */}
      <InfoContainer>
        <Heading>Our Location Information</Heading>
        <InfoList>
          <li>Address: JC6X+R99, Tiruchanur, Tirupati, AP 517503</li>
          <li>Operating Hours: 9:00 AM - 6:00 PM</li>
          <li>Contact: 9949459796 <span style={{color: "black"}}>or</span> 9949817760 </li>
          <li>Website: https://royalfurn.store/</li>
          <li>More Info: Visit our website for more details</li>
        </InfoList>
      </InfoContainer>
    </Container>
  );
};

export default GoogleNav;


