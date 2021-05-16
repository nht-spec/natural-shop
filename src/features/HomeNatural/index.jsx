import { Box } from '@material-ui/core';
import React from 'react';
import { NavLink } from 'react-router-dom';
import Footer from '../footer';
import './style.scss';
HomeNatural.propTypes = {
    
};

function HomeNatural(props) {
    return (
        <div>
            <Box className='home__title'>
            <h1>Just like nature intended</h1>
            <p>handcrafted organic soaps & candles</p>
            <NavLink className='click__btn' to='/products'>Shop now</NavLink>
            </Box>
            <Box className='background__imgs'>
                <img src="https://static.wixstatic.com/media/84770f_486a47ad0d0b4fd8a31bb9e02252a89c~mv2_d_1950_1300_s_2.jpg/v1/crop/x_54,y_0,w_1841,h_1300/fill/w_1213,h_850,al_c,q_85,usm_0.66_1.00_0.01/photo-1527904219733-fddc74937915-6.webp" alt=""/>
            </Box>
            <Box className='our__page'>
                    <h1>Our favorites</h1>
                <Box className='out__title'>
                    <h3>Probiotic cleansing bars</h3>
                    <p>I'm a paragraph. Click here to add your own text and edit me. Let your users get to know you.</p>
                    <NavLink className='click__btn' to='/category'>Shop soaps</NavLink>
                </Box>
                <Box className='out__title2'>
                    <h3>Nature's essence Scented Candles</h3>
                    <p>I'm a paragraph. Click here to add your own text and edit me. Let your users get to know you.</p>
                    <NavLink className='click__btn' to='/productforhome'>Shop candles</NavLink>
                </Box>
                <Box className='video__product'>
                <video style={{width:'491px', height:'401px'}} src="/video2.mp4" autoPlay loop ></video>
                </Box>
                <Box className='video__product2'>
                    <video style={{width:'491px', height:'401px'}} src="/video1.mp4" autoPlay loop></video>
                </Box>
            </Box>
            <Box>
                <Box className='simple__page'>
                <h1>Naturally Simple</h1>
                <p>I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. I’m a great place for you to tell a story and let your users know a little more about you.</p>
                <Box className='simple__title'>
                    <p>“I'm a testimonial. Click to edit me and add text that says something nice about you and your services.”</p>
                    <h4>MIA, SAN FRANCISCO</h4>
                </Box>
                    <img src="https://static.wixstatic.com/media/86cb94_8a3de89fe3cc4e15b70e1cb06cbb73c1~mv2_d_3938_4972_s_4_2.jpg/v1/crop/x_330,y_1411,w_3608,h_3121/fill/w_451,h_390,al_c,q_80,usm_0.66_1.00_0.01/alex-loup-393839-unsplash(hand)2.webp" alt=""/>
                <Box className='simple__btn'>
                    <NavLink className='click__btn' to='/about'>Learn more</NavLink>
                </Box>
                <Box className='frais__page'>
                <h1>#frais</h1>
                <Box className='img__list'>
                    <img style={{width:'207px', height:'207px'}} src="https://static.parastorage.com/services/instagram-cdn/1.691.0/assets/ig-templates-accounts/Editor/CBD Soaps and Candles Store/01.jpg" alt="" />
                    <img style={{width:'207px', height:'207px'}} src="https://static.parastorage.com/services/instagram-cdn/1.691.0/assets/ig-templates-accounts/Editor/CBD Soaps and Candles Store/02.jpg" alt="" />
                    <img style={{width:'207px', height:'207px'}} src="https://static.parastorage.com/services/instagram-cdn/1.691.0/assets/ig-templates-accounts/Editor/CBD Soaps and Candles Store/03.jpg" alt="" />
                    <img style={{width:'207px', height:'207px'}} src="https://static.parastorage.com/services/instagram-cdn/1.691.0/assets/ig-templates-accounts/Editor/CBD Soaps and Candles Store/04.jpg" alt="" />
                    <img style={{width:'207px', height:'207px'}} src="https://static.parastorage.com/services/instagram-cdn/1.691.0/assets/ig-templates-accounts/Editor/CBD Soaps and Candles Store/05.jpg" alt="" />
                    <img style={{width:'207px', height:'207px'}} src="https://static.parastorage.com/services/instagram-cdn/1.691.0/assets/ig-templates-accounts/Editor/CBD Soaps and Candles Store/06.jpg  " alt="" />
                    <img style={{width:'207px', height:'207px'}} src="https://static.parastorage.com/services/instagram-cdn/1.691.0/assets/ig-templates-accounts/Editor/CBD Soaps and Candles Store/07.jpg" alt="" />
                    <img style={{width:'207px', height:'207px'}} src="https://static.parastorage.com/services/instagram-cdn/1.691.0/assets/ig-templates-accounts/Editor/CBD Soaps and Candles Store/08.jpg" alt="" />
                </Box>
                <p className='boder__bottom'></p>
                </Box>
            </Box>
            </Box>
            <Box>
            </Box>
            <Box className='footer__pagess'>
            <p></p>
            <Footer/>
            </Box> 
        </div>
    );
}

export default HomeNatural;