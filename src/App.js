/* eslint-disable react/jsx-no-undef */
import './App.css';
import { Box } from "@mui/material";
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import Section2 from './components/Section2';
import Section3 from './components/Section3';
import Section4 from './components/Section4';
import Section5 from './components/Section5';  
import Section6 from './components/Section6'; 
import Section7 from './components/Section7';
import Section8 from './components/Section8';
import Section9 from './components/Section9';
import Footer from './components/Footer';
import SectionFooter from './components/SectionFooter';

function App() {
  return (
    <Box>
      <Header />
      <HeroSection />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
      <Section6 />
      <Section7 />
      <Section8 />
      <Section9 />
      <SectionFooter />
      <Footer />
    </Box>
  );
}

export default App;
