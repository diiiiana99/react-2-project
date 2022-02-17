import {useState} from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';
// // import {Link} from 'react-router-dom'
import EmailSection from './EmailSection.js';

function HeroSection() {

const [visible, setVisible] = useState(false)

const handleClick = () => {
  setVisible(!visible)
}

const handleModalClick = () => {
  setVisible(false)
}
  return (
    <div>
      <div>
        <EmailSection visible={visible} handleModalClick={handleModalClick}/>
      </div>
    <div className={`hero-container${visible ? "-blur" : ''}`}>
      <h1>Get to Know Our agents</h1>
      <p> Whether you are buying, renting, or selling, when you connect with a Corcoran agent, you are working with the best in the  business</p>
    {/* </div>  */}
    <div className='hero-btns'>
       {/* <Link to = "/form">  */}
       <Button
          disabled={!visible}
          className='btns1'
          buttonStyle= 'btn--outline'
          buttonSize='btn--large'
          onClick={!visible ? handleClick : undefined}
          // onClick={handleClick}
        >
          JOIN OUR TEAM
        </Button>
        {/* </Link> */}
        <Button
          disabled={!visible}
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
    </div>
  
  );
}

export default HeroSection;