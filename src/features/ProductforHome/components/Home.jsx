import { Box, Typography } from '@material-ui/core';
import PropTypes from 'prop-types';
import React from 'react';

Home.propTypes = {
    home: PropTypes.object,
};

function Home({home}) {
    return (
        <Box padding={1}>
        <Box >
        <img width='100%' src={`http://localhost:1337${home.imagess?.url}`}/>
        </Box>
        <Box paddingTop={1.5}>
        <Typography variant='body2'>{home.name}</Typography>
        <Box marginTop='5px'>
        <Typography className='home__price' variant='body3'>${home.number}</Typography>
        </Box>
        <Box marginTop={1}>
        <button className='card__btn'>add to card</button>
        </Box>
        </Box>
    </Box>
    );
}

export default Home;