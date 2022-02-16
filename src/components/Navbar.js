// import React from 'react';
// import styled from 'styled-components'
// import {Link} from 'react-router-dom'

// const Nav = styled.nav`
// height:60px;
// background:red;
// `;

// const Logo=styled(Link)`
// color:white;
// `;

// const MenuBar= styled.i``
// const NavMenu = styled.div``
// const Navbar = () => {
//   return(
//     <Nav>
//       <Logo>Elixr</Logo>
//       <MenuBar/>
//       <NavMenu>

//       </NavMenu>
//       <h1>Navbar</h1>  
//         </Nav>
//   )
// }
// export default Navbar
import React, { useState, useEffect } from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import './Navbar.css';


function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
            Need a Crib?
            <i class='fab fa-typo3' />
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/home' className='nav-links' onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/agents'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Agents
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/cribs'
                className='nav-links'
                onClick={closeMobileMenu}
              >
               Cribs
              </Link>
            </li>

            <li>
              <Link
                to='/sign-up'
                className='nav-links-mobile'
                onClick={closeMobileMenu}
              >
                Sign Up
              </Link>
            </li>
          </ul>
          {button && <Button buttonStyle='btn--outline'>SIGN UP</Button>}
        </div>
      </nav>
    </>
  );
}

export default Navbar;