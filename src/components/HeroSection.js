import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';

function HeroSection() {



  return (
    <div className='hero-container'>
     
      <h1>Get to Know Our agents</h1>
      <p> Whether you are buying, renting, or selling, when you connect with a Corcoran agent, you are working with the best in the  business</p>
      <div className='hero-btns'>
        <Button
          className='btns1'
          buttonStyle= 'btn--outline'
          buttonSize='btn--large'
    
        >
          CHECK OUR AGENTS
        </Button>
        <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          onClick={console.log('hey')}
        >
          CHECK OUT OUR CRIBS  <div className="watch" />
        </Button>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.9.1/gsap.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.9.1/ScrollTrigger.min.js"></script>
      </div>
    </div>
  );
}

export default HeroSection;