import { Box } from '@material-ui/core';
import React from 'react';
import { NavLink } from 'react-router-dom';
import './style.scss';
HomeNatural.propTypes = {
    
};

function HomeNatural(props) {
    return (
        <div>
            <Box className='home__title'>
            <h1>Just like nature intended</h1>
            <p>handcrafted organic soaps & candles</p>
            <NavLink to='/products'>Shop now</NavLink>
            </Box>
            <Box className='background__imgs'>
                <img src="https://static.wixstatic.com/media/84770f_486a47ad0d0b4fd8a31bb9e02252a89c~mv2_d_1950_1300_s_2.jpg/v1/crop/x_54,y_0,w_1841,h_1300/fill/w_1213,h_850,al_c,q_85,usm_0.66_1.00_0.01/photo-1527904219733-fddc74937915-6.webp" alt=""/>
            </Box>
            <Box>
                <Box>
                    <h1>Our favorites</h1>
                    <h3>Probiotic cleansing bars</h3>
                    <p>I'm a paragraph. Click here to add your own text and edit me. Let your users get to know you.</p>
                </Box>
                <Box>
                <video src="https://player.vimeo.com/external/516608637.sd.mp4?s=b73008f314aecb1de8247cabbbfb8ad3a10d032a&profile_id=139&oauth2_token_id=57447761" autoPlay loop></video>
                </Box>
            </Box>
        </div>
    );
}

export default HomeNatural;