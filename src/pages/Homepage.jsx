import React from 'react';
import Hero from '../components/HomePage/Hero/Hero';
import Review from '../components/HomePage/reviews/Review';
import Contact from '../components/HomePage/contact-form/Contact';
import Category from '../components/HomePage/categories/Category';
import Footer from '../components/HomePage/footer/Footer';
import PopularProducts from '../components/HomePage/popular-products/PopularProducts';
import Toast from '../data/Toast';
import PhoneIconComponent from '../components/utils/PhoneIconComponent';
import GoogleNav from '../components/HomePage/GoogleNav/GoogleNav';

const Homepage = () => {
  return (
    <div>
      {/* Hero Section */}
      <Hero />

      {/* Category Section (Products) */}
      <div id="products">
        <Category />
      </div>

      {/* Popular Products */}
      <PopularProducts />

      {/* Reviews */}
      <Review />

      {/* Contact Section */}
      <div id="contact">
        <Contact />
      </div>

      <Toast />
      <PhoneIconComponent />

      <GoogleNav />

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Homepage;
