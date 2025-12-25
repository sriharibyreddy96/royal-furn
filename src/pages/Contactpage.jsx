import React, { useEffect } from 'react'
import Navbar from '../components/HomePage/navbar/Navbar'
import Contact from '../components/HomePage/contact-form/Contact'
import Footer from '../components/HomePage/footer/Footer'
import { useLocation } from 'react-router-dom'
import Toast from '../data/Toast'
import PhoneIconComponent from '../components/utils/PhoneIconComponent'
import GoogleNav from '../components/HomePage/GoogleNav/GoogleNav'

const Contactpage = () => {

  const location = useLocation();
  
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to top whenever the route changes
  }, [location]);

  return (
    <div>
        <Navbar />
        <Contact />
        <Toast />
        <GoogleNav />
        <PhoneIconComponent />
        <Footer />
    </div>
  )
}

export default Contactpage