import React from 'react'
import './App.css'
import NavBar from './components/Navbar.jsx';
import HeroSection from './components/HeroSection.jsx';
import FeatureSection from './components/FeatureSection.jsx';
import ImageGrid from './components/ImageGrid.jsx';
import Testimonials from './components/Testimonials.jsx';
import CallToAction from './components/CallToAction.jsx';


function App() {
  return (
    <>
      <NavBar />
      <HeroSection />
      <FeatureSection /> 
      <ImageGrid />
      <Testimonials /> 
      <CallToAction /> 
     </>
  );
}


export default App
