import { Box, Grid } from '@material-ui/core';
import React from 'react';
import Footer from '../footer';
import './style.scss';
aboutFeature.propTypes = {
    
};

function aboutFeature(props) {
    return (
       <div className='about__page'>
           <h1>A story of freshness</h1>
           <Grid container className='about__list'>
               <Grid item className='about__imgitems'>
                   <img className='img__1' src="https://static.wixstatic.com/media/86cb94_515b1bc924684ba991027d338c15d7e3~mv2.jpg/v1/crop/x_0,y_0,w_685,h_862/fill/w_513,h_645,al_c,q_80,usm_0.66_1.00_0.01/AdobeStock_204103785_edited.webp" alt="" />
                   <img className='img__2' src="https://static.wixstatic.com/media/86cb94_47b4d2b8f5b4485ab8bb0e2be1f0f077~mv2_d_6000_4000_s_4_2.jpg/v1/crop/x_3541,y_424,w_2459,h_2700/fill/w_435,h_478,al_c,q_80,usm_0.66_1.00_0.01/pawel-czerwinski-759716-unsplash-about_j.webp" alt="" />
               </Grid>
               <Grid item className='about__titleitems'>
                   <h3>Meet Alison</h3>
                   <p style={{marginBottom:'30px'}}>I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. Feel free to drag and drop me anywhere you like on your page. I’m a great place for you to tell a story and let your users know a little more about you.</p>
                   <p>This is a great space to write long text about your company and your services. You can use this space to go into a little more detail about your company. Talk about your team and what services you provide. Tell your visitors the story of how you came up with the idea for your business and what makes you different from your competitors. Make your company stand out and show your visitors who you are.</p>             
               </Grid>
           </Grid>
           <h2 style={{borderBottom:'2px solid black', marginTop:'50px'}}></h2>
           <Box className='about__footer'>
               <Footer/>
           </Box>
       </div>
    );
}

export default aboutFeature;