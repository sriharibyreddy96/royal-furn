import React, { useState } from "react";
import styled from "styled-components";
import { FaPhone } from "react-icons/fa";

const TeleIconWrapper = styled.div`
  position: fixed;
  bottom: 11%;
  right: 2%;
  z-index: 9;
  display: flex;
  flex-direction: column;
  align-items: flex-end; /* Align to the right */
  ${({ expanded }) =>
    expanded &&
    `
    align-items: flex-start; /* Align to the left when expanded */
  `}
`;

const TeleIconLink = styled.a`
  text-decoration: none;
  display: inline-block;
  cursor: pointer;
`;

const IconContainer = styled.div`
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
`;

const Icon = styled.i`
  font-size: 25px;
  color: #fff;
  background-color: green;
  padding: 10px;
  border-radius: 5px;
  display: inline-block;
  transition: all 0.3s ease;
  ${({ expanded }) =>
    expanded &&
    `
    font-size: 30px;
    padding: 11px 12px;
    border-radius: 0px 5px 5px 0px;
    border-left: 1px solid white;
  `}
`;

const PhoneText = styled.span`
  color: #fff;
  font-size: 15px;
  background-color: green;
  padding: 3px 5px;
  border-radius: 5px 0px 0px 5px;
  display: ${({ visible }) => (visible ? "inline-block" : "none")};
  transition: opacity 0.3s ease;
`;

const PhoneLink = styled.a`
  color: #fff;
  text-decoration: none;
  padding: 4px 10px;
  display: inline-block;
  transition: background-color 0.3s ease, transform 0.3s ease;

  &:hover {
  border: 1px solid white;
  border-radius: 3px;
    background-color: #008200; /* Darker red when hovered */
    transform: scale(1.04); /* Slightly enlarge on hover */
  }
`;

const PhoneIconComponent = () => {
  const [expanded, setExpanded] = useState(false);

  const toggleExpand = () => {
    setExpanded(!expanded);
  };

  return (
    <TeleIconWrapper expanded={expanded}>
      <TeleIconLink onClick={toggleExpand} aria-label="call">
        <IconContainer>
          <Icon expanded={expanded}>
            <FaPhone />
          </Icon>
          <PhoneText visible={expanded}>
            {/* Make phone numbers clickable and highlight on hover */}
            <PhoneLink href="tel:+919949459796">
              +91 9949459796
            </PhoneLink>
            <br />
            <PhoneLink href="tel:+919949817760">
              +91 9949817760
            </PhoneLink>
          </PhoneText>
        </IconContainer>
      </TeleIconLink>
    </TeleIconWrapper>
  );
};

export default PhoneIconComponent;
