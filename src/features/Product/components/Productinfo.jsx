import { Box, Typography } from '@material-ui/core';
import PropTypes from 'prop-types';
import React from 'react';
import './style.scss';
Productinfo.propTypes = {
    product: PropTypes.object,
};

function Productinfo({product = {} }) {
    const { name,  PriceProducts} = product;
    return (
    <Box >
           <Typography className='products__name'>
               {name}
           </Typography>
           <Box>
               <Box className='products__price'>${PriceProducts}</Box>
           </Box>
    </Box>
    );
}

export default Productinfo;