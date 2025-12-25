import React, { useState } from "react";
import styled from "styled-components";
import emailjs from "emailjs-com";
import ContactIng from "../../../assets/contact_form1.webp";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    product: "", // For the dropdown
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false); // Track form submission state

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if required fields are filled
    if (!formData.name || !formData.mobile || !formData.message) {
      toast.error("Please fill all required fields.");
      return;
    }

    // Handle email optional condition
    if (formData.email && !validateEmail(formData.email)) {
      toast.error("Please enter a valid email address.");
      return;
    }

    setIsSubmitting(true);

    // Send email to admin (admin_notification_template)
    emailjs
      .send(
        "service_mp0e1192", // Your EmailJS service ID
        "template_p77cp8b", // Admin notification template
        formData, // Form data to be sent (name, email, message, etc.)
        "yozpNwsbycgL75hCS" // Your EmailJS user ID
      )
      .then(
        () => {
          // Send email to user (user_notification_template) if email is provided
          if (formData.email) {
            emailjs
              .send(
                "service_mp0e1192", // Your EmailJS service ID
                "template_ai8fo9j", // User confirmation template
                {
                  ...formData, // Send the form data to the user email template
                  to_email: formData.email, // Make sure you send the email to the user's email address
                },
                "yozpNwsbycgL75hCS" // Your EmailJS user ID
              )
              .then(() => {
                setIsSubmitting(false);
                toast.success(
                  "Thank you for contacting us! We will get back to you soon."
                );
                setFormData({
                  name: "",
                  email: "",
                  mobile: "",
                  product: "",
                  message: "",
                });
              })
              .catch((error) => {
                setIsSubmitting(false);
                toast.error(
                  "There was an error sending the email to the user."
                );
              });
          } else {
            setIsSubmitting(false);
            toast.success(
              "Thank you for contacting us! We will get back to you soon."
            );
            setFormData({
              name: "",
              email: "",
              mobile: "",
              product: "",
              message: "",
            });
          }
        },
        (error) => {
          setIsSubmitting(false);
          toast.error("There was an error sending the email to the admin.");
        }
      );
  };

  // Simple email validation function
  const validateEmail = (email) => {
    const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return re.test(String(email).toLowerCase());
  };

  return (
    <Section>
      <Heading>Contact Us</Heading>
      <Container>
        {/* Left Image Section */}
        <ImageWrapper>
          <img src={ContactIng} alt="Contact" />
        </ImageWrapper>

        {/* Right Form Section */}
        <FormWrapper>
          <h1>Let's Stay in Touch</h1>
          <h3>If you have any queries</h3>
          <Form onSubmit={handleSubmit}>
            <Input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleInputChange}
              required
            />
            <Input
              type="email"
              name="email"
              placeholder="Your Email (optional)"
              value={formData.email}
              onChange={handleInputChange}
            />
            <Input
              type="number"
              name="mobile"
              placeholder="Your Mobile Number"
              value={formData.mobile}
              onChange={handleInputChange}
              required
            />
            <Select
              name="product"
              value={formData.product}
              onChange={handleInputChange}
              required
            >
              <option value="">Select Which Product You Want</option>
              <option value="Sofa">Sofa</option>
              <option value="Dining tables">Dining tables</option>
              <option value="Beds">Beds</option>
              <option value="All">All</option>
            </Select>
            <TextArea
              name="message"
              placeholder="Your Message"
              rows="4"
              value={formData.message}
              onChange={handleInputChange}
              required
            />
            <SubmitButton type="submit" disabled={isSubmitting}>
              {isSubmitting ? "Sending..." : "Send"}
            </SubmitButton>
          </Form>
        </FormWrapper>
      </Container>
    </Section>
  );
};

export default Contact;

// Styled Components

const Section = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 40px 20px;
  margin: 30px 0px;
  flex-direction: column;
  gap: 30px;
`;

const Heading = styled.h1`
  font-size: 35px;
`;

const Container = styled.div`
  display: flex;
  border-radius: 10px;
  background-color: #ecffdc;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  flex-wrap: wrap;
  padding: 10px 40px;

  @media screen and (max-width: 1000px) {
    flex-direction: column;
  }

  @media screen and (max-width: 500px) {
    padding: 10px 5px;
  }
`;

const ImageWrapper = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;

  img {
    max-width: 100%;
    height: auto;
    border-radius: 10px;
  }
`;

const FormWrapper = styled.div`
  flex: 1;
  padding: 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  h3 {
    margin-top: 10px;
    color: grey;
  }

  @media screen and (max-width: 500px) {
    padding: 10px;
  }
`;

const Form = styled.form`
  width: 100%;
  margin-top: 20px;
`;

// const Input = styled.input`
//   width: 100%;
//   padding: 10px;
//   margin-bottom: 10px;
//   border: 1px solid #ddd;
//   border-radius: 5px;
//   font-size: 16px;
//   background-color: #ffffff;
// `;


const Input = styled.input`
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
  font-size: 16px;
  background-color: #ffffff;

  /* Hide the spinner (increase/decrease) buttons in WebKit browsers (Chrome, Safari, Edge) */
  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;  /* Removes the spinner buttons */
    margin: 0;                 /* Optional: remove margin */
  }

  /* Hide the spinner buttons in Firefox */
  & {
    -moz-appearance: textfield; /* Removes spinner buttons in Firefox */
    appearance: none;           /* Removes spinner buttons in modern browsers */
  }
`;

const Select = styled.select`
  width: 100%;
  padding: 15px;
  margin-bottom: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
  font-size: 16px;
  background-color: #ffffff;
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 15px;
  margin-bottom: 15px;
  border: 1px solid #ddd;
  border-radius: 5px;
  font-size: 16px;
  background-color: #ffffff;
`;

const SubmitButton = styled.button`
  width: 100%;
  padding: 15px;
  border: none;
  background-color: #03c03c;
  color: white;
  font-size: 18px;
  font-weight: 700;
  cursor: pointer;
  border-radius: 5px;

  &:hover {
    background-color: #03c08c;
  }

  &:disabled {
    background-color: #ddd;
    cursor: not-allowed;
  }
`;
