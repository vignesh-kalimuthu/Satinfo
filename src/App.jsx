

import './App.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Navbar from './components/Navbar'
import Banner from './components/Banner'
import Cards from './components/Cards'
import About from './components/About'
import ProjectCounts from './components/ProjectCounts'
import Services from './components/services'
import TestimonialCarousel from './components/TestimonialCarousel';
import Team from './components/Team';
import CallToAction from './components/CallToAction';
import Contact from './components/Contact';
import NewsletterSection from './components/NewsletterSection';
import Footer from './components/Footer';
import Portfolio from './components/Portfolio';

function App() {
 

  return (
    <>
    <div className='lg:mx-[5em]' >
    
      <Navbar />
      <div className="pt-18"> 
        <Banner />
      </div>
      <Cards />
      <About />
      <ProjectCounts />
     
      
      </div>
       <Services />
       <Portfolio />
       <TestimonialCarousel />
       <CallToAction />
       <Team />
       <Contact />
       <NewsletterSection />
       <Footer />
       
       </>
        )
}

export default App
