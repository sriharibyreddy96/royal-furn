import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { RiArrowLeftSLine, RiArrowRightSLine } from "react-icons/ri";
import Review1 from "../../../assets/review-profile-1.jpeg";
import Review2 from "../../../assets/review-profile-2.jpeg";
import Review3 from "../../../assets/review-profile-3.jpeg";
import Review4 from "../../../assets/review-profile-4.jpeg";

// Main Review Section Container
const ReviewContainer = styled.section`
  text-align: center;
  margin: 50px auto;
  max-width: 1200px;
  padding: 0 20px;
  color: #333;
`;

// Heading and Subheading Styling
const Heading = styled.h1`
  font-size: 35px;
  margin-bottom: 10px;
  color: black;
`;

const SubHeading = styled.p`
  font-size: 1.2rem;
  margin-bottom: 30px;
  color: gray;
`;

// Card Slider Container (Centering the Cards)
const CardSlider = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  overflow: hidden;
  justify-content: center; /* Center the cards */
  width: 100%;
  flex-wrap: nowrap;

  @media (max-width: 768px) {
    display: block;
  }
`;

// Card Container (Flex Layout for Cards)
const Card = styled.div`
  display: flex;
  background-color: #ecffdc;
  color: black;
  border-radius: 8px;
  margin: 0 10px;
  padding: 20px;
  max-width: 700px;
  height: auto;
  flex-shrink: 0;
  transition: transform 0.3s ease-in-out;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 100%;

  @media (max-width: 768px) {
    margin: 15px auto;
    width: 90%;
  }
`;

// Profile Image Styling
const ProfileImage = styled.div`
  width: 120px;
  height: 120px;
  border-radius: 50%;
  overflow: hidden;
  margin-bottom: 15px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

// Stars Container
const StarsContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 10px;
`;

const Star = styled.span`
  color: gold;
  margin-right: 2px;
  font-size: 1.5rem;
`;

// Review Description
const Description = styled.p`
  font-size: 1.3rem;
  text-align: center;
  color: #555;
  margin-top: 10px;
  line-height: 1.5;
  max-width: 90%;
  margin: 0 auto;
`;

// Navigation Arrows (Positioning and Styling)
const ArrowButton = styled.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  font-size: 2rem;
  color: white;
  background-color: #0a566d;
  border-radius: 50%;
  border: 1px solid #0a566d;
  padding: 8px 7px 5px 7px;
  cursor: pointer;
  z-index: 10;
  transition: background-color 0.3s;

  &:active {
    background-color: #0a566d;
  }

  ${(props) => (props.left ? `left: 10px;` : `right: 10px;`)}
`;

// Dot Navigation (for mobile)
const DotNav = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

const Dot = styled.div`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background-color: ${(props) => (props.active ? "#f1c40f" : "#7f8c8d")};
  margin: 0 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
`;

// Review Data (Sample)
const reviews = [
  {
    image: Review1,
    userImage: Review1,
    userName: "John Doe",
    stars: 5,
    reviewText: "Amazing furniture! Really loved the quality and design.",
  },
  {
    image: "https://via.placeholder.com/150x150?text=User+2",
    userImage: Review2,
    userName: "Jane Smith",
    stars: 4,
    reviewText: "Great style, but the delivery could have been faster.",
  },
  {
    image: "https://via.placeholder.com/150x150?text=User+3",
    userImage: Review3,
    userName: "James Lee",
    stars: 5,
    reviewText:
      "Super comfortable and perfect for my living room! Very satisfied.",
  },
  {
    image: "https://via.placeholder.com/150x150?text=User+4",
    userImage: Review4,
    userName: "Emily Davis",
    stars: 4,
    reviewText:
      "Love the design, but a bit pricey. Nevertheless, worth every penny.",
  },
];

const Review = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Handle Arrow Navigation
  const nextSlide = () => {
    if (currentIndex < reviews.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  // Auto-slide functionality for mobile
  useEffect(() => {
    const autoSlide = setInterval(() => {
      if (window.innerWidth <= 768) {
        nextSlide();
      }
    }, 5000);

    return () => clearInterval(autoSlide);
  }, [currentIndex]);

  return (
    <ReviewContainer>
      <Heading>Our Clients Review</Heading>
      <SubHeading>
        See what our customers have to say about their experience with our
        products.
      </SubHeading>

      {/* Card Slider */}
      <CardSlider>
        {/* Left Arrow */}
        {currentIndex > 0 && (
          <ArrowButton left onClick={prevSlide}>
            <RiArrowLeftSLine />
          </ArrowButton>
        )}

        {/* Card */}
        <Card>
          <ProfileImage>
            <img src={reviews[currentIndex].userImage} alt="profile" />
          </ProfileImage>
          <StarsContainer>
            {[...Array(5)].map((_, index) => (
              <Star key={index}>
                {index < reviews[currentIndex].stars ? "★" : "☆"}
              </Star>
            ))}
          </StarsContainer>
          <Description>{reviews[currentIndex].reviewText}</Description>
        </Card>

        {/* Right Arrow */}
        {currentIndex < reviews.length - 1 && (
          <ArrowButton onClick={nextSlide}>
            <RiArrowRightSLine />
          </ArrowButton>
        )}
      </CardSlider>

      {/* Dot Navigation (for mobile) */}
      <DotNav>
        {reviews.map((_, index) => (
          <Dot
            key={index}
            active={index === currentIndex}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </DotNav>
    </ReviewContainer>
  );
};

export default Review;
