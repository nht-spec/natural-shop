import { Box, Grid } from '@material-ui/core';
import React from 'react';
import { NavLink } from 'react-router-dom';
import Footer from '../footer';
import FraisList from './components/FraisList';
import './style.scss';
HomeNatural.propTypes = {
    
};

function HomeNatural(props) {
  const fraisList = [
    {
      id: 1,
      thumbnailUrl:'https://static.parastorage.com/services/instagram-cdn/1.691.0/assets/ig-templates-accounts/Editor/CBD Soaps and Candles Store/01.jpg',
    },
    {
      id: 2,
      thumbnailUrl:'https://static.parastorage.com/services/instagram-cdn/1.691.0/assets/ig-templates-accounts/Editor/CBD Soaps and Candles Store/02.jpg',
    },
    {
      id: 3,
      thumbnailUrl:'https://static.parastorage.com/services/instagram-cdn/1.691.0/assets/ig-templates-accounts/Editor/CBD Soaps and Candles Store/03.jpg',
    },
    {
      id: 4,
      thumbnailUrl:'https://static.parastorage.com/services/instagram-cdn/1.691.0/assets/ig-templates-accounts/Editor/CBD Soaps and Candles Store/04.jpg',
    },
    {
      id: 5,
      thumbnailUrl:'https://static.parastorage.com/services/instagram-cdn/1.691.0/assets/ig-templates-accounts/Editor/CBD Soaps and Candles Store/05.jpg',
    },
    {
      id: 6,
      thumbnailUrl:'https://static.parastorage.com/services/instagram-cdn/1.691.0/assets/ig-templates-accounts/Editor/CBD Soaps and Candles Store/06.jpg',
    },
    {
      id: 7,
      thumbnailUrl:'https://static.parastorage.com/services/instagram-cdn/1.691.0/assets/ig-templates-accounts/Editor/CBD Soaps and Candles Store/07.jpg',
    },
    {
      id: 8,
      thumbnailUrl:'https://static.parastorage.com/services/instagram-cdn/1.691.0/assets/ig-templates-accounts/Editor/CBD Soaps and Candles Store/08.jpg',
    },
  ]
    return (
      <Box className='home__page'>
        <Box className='slide__nav'>
        <img style={{width:'980px'}} src="https://static.wixstatic.com/media/84770f_486a47ad0d0b4fd8a31bb9e02252a89c~mv2_d_1950_1300_s_2.jpg/v1/crop/x_54,y_0,w_1841,h_1300/fill/w_1213,h_850,al_c,q_85,usm_0.66_1.00_0.01/photo-1527904219733-fddc74937915-6.webp" alt="" />
        <Box className='home__title'>
          <h1>Just like nature intended</h1>
          <p>handcrafted organic soaps & candles</p>
          <NavLink className='shopall__btn' to='/products'>Shop now</NavLink>
         </Box>
          </Box>

         <Box className='out__fav'>
             <h1>Our favorites</h1>
             <Grid container className='out__item1'>
                <Grid item>
                    <Box  className='item1__title'>
                     <h2>Probiotic cleansing bars</h2>
                     <p>I'm a paragraph. Click here to add your own text and edit me. Let your users get to know you.</p>
                     <NavLink  className='shopsoaps__btn' to='/category'>Shop soaps</NavLink>
                    </Box>
                </Grid>
                <Grid item>
              <video style={{width:'472px'}} src="video2.mp4" autoPlay loop></video>
                </Grid>
             </Grid>
             <Grid container className='out__item2'>
                <Grid item>    
              <video style={{width:'472px'}} src="video1.mp4" autoPlay loop></video>
                </Grid>
                <Grid item>
                <Box  className='item2__title'>
                <h2>Nature's essence Scented Candles</h2>
                     <p>I'm a paragraph. Click here to add your own text and edit me. Let your users get to know you.</p>
                     <NavLink  className='shopsoaps__btn' to='/productforhome'>Shop candles</NavLink>
                    </Box>
                </Grid>
             </Grid>
         </Box>

         <Box className='nature__simple'>
           <h1>Naturally Simple</h1>
           <p>I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. I’m a great place for you to tell a story and let your users know a little more about you.</p>
           <Grid container className='natural__list'>
             <Grid item>
               <img style={{width:'361px'}} src="https://static.wixstatic.com/media/86cb94_8a3de89fe3cc4e15b70e1cb06cbb73c1~mv2_d_3938_4972_s_4_2.jpg/v1/crop/x_330,y_1411,w_3608,h_3121/fill/w_451,h_390,al_c,q_80,usm_0.66_1.00_0.01/alex-loup-393839-unsplash(hand)2.webp" alt="" />
             </Grid>
             <Grid item className='natural__item'>
               <p>“I'm a testimonial. Click to edit me and add text that says something nice about you and your services.”</p>
               <h4>MIA, SAN FRANCISCO</h4>
               <NavLink  className='about__btn' to='/about'>Learn more</NavLink>
             </Grid>
           </Grid>
         </Box>

         <Box className='frais__page'>
           <h1>#frais</h1>
           <Grid container>
             <Grid item >
                  <FraisList fraisList={fraisList}/>
             </Grid>
           </Grid>
           <h3></h3>
         <Box>
           <Footer/>
         </Box>
         </Box>
      </Box>
    );
}

export default HomeNatural;