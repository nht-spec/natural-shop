import { Box } from '@material-ui/core';
import React from 'react';
import Footer from '../footer';
import Contacts from './components/Contact';
import './style.scss';
ContactsFeature.propTypes = {
    
};

function ContactsFeature(props) {
    return (
        <div>
            <Box className='contact__page'>
            <h1>Let's talk</h1>
            <Box className='contact__text'>
                <p>If you have questions or special inquiries, you're welcome to contact me or fill out this form.</p>
                <h2>ALISON MATTHEWS</h2>
                <span>Tel: 123-456-7890</span>
                <h3></h3>
                <span>Email: hoangthinh.vn20@gmail.com</span>
            </Box>
            <Box className='contact__form'>
           <Contacts/>
            </Box>
            </Box>
            <Box className='footer__page3'>
            <p></p>
            <Footer/>
            </Box> 
        </div>
    );
}

export default ContactsFeature;