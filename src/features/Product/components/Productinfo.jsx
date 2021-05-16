import { Box, Typography } from '@material-ui/core';
import PropTypes from 'prop-types';
import React from 'react';
import { Dropdown, DropdownButton } from 'react-bootstrap';
import './style.scss';
Productinfo.propTypes = {
    product: PropTypes.object,
};

function Productinfo({product = {} }) {
    const { name,  priceProducts} = product;
    return (
    <Box>
           <Typography className='products__name'>
               {name}
           </Typography>
           <Box>
               <Box className='products__price'>${priceProducts}</Box>
           </Box>
    </Box>
    );
}

export default Productinfo;