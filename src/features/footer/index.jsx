import { Box } from '@material-ui/core';
import React from 'react';
import { NavLink } from 'react-router-dom';
import Contact from './component/Contact/Contact';
import './style.scss'
Footer.propTypes = {
    
};

function Footer(props) {
    return (
        <Box className= 'footer__page'>
            <Box className='frais__list'>
                <ul>
                <h2>frais</h2>
                    <li>
                        <NavLink to='/products'>Shop all</NavLink>
                    </li>
                    <li>
                    <NavLink to='/category'>For body</NavLink>
                    </li>
                    <li>
                    <NavLink to='/productforhome'>For Home</NavLink>
                    </li>
                    <li>
                    <NavLink to='/about'>About</NavLink>
                    </li>
                    <li>
                    <NavLink to='/contact'>Contact</NavLink>
                    </li>
                </ul>
                <ul>
                <h2>Help</h2>
                    <li>
                    <NavLink to='/products'>shipping & returns</NavLink>
                    </li>
                    <li>
                    <NavLink to='/category'>store policy</NavLink>
                    </li>
                    <li>
                    <NavLink to='/productforhome'>payment methods</NavLink>
                    </li>
                    <li>
                    <NavLink to='/productforhome'>faq</NavLink>
                    </li>
                </ul>
                <ul>
                <h2>Contact</h2>
                    <li>123-456-7890 </li>
                    <li>hoangthinh.vn20@gmail.com</li>
                </ul>

                <Box className='contact__form' width='40%'  height='37px'>  
                    <h2>Newsletter</h2>
                    <p>Enter Email *</p>
                <Box className='contact__btn'>
                <Contact/>
                </Box>
            </Box>
            </Box>
                 <p className='footer__text'>© 2021 by NHT. Proudly created with Wix</p>
        </Box>
    );
}

export default Footer;