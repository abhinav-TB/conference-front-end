import React from 'react';
import Navbar from '../components/navbar/navbar'
import Intro from '../components/Intro/intro'
import About from '../components/about/about'
import Timer from '../components/timer/timer'
import Speakers from '../components/speakers/speakers'
import Footer from '../components/footer/footer'

function Home() {
  return (
    <>
    <Navbar/>
    <Intro/>
    <Timer/>
    <About/>
    <Speakers/>
    <Footer/>
    </>  
  );
}

export default Home;
