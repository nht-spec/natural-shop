import React from 'react';
import PropTypes from 'prop-types';
import { Box, Typography } from '@material-ui/core';

Productinfo.propTypes = {
    product: PropTypes.object,
};

function Productinfo({product = {} }) {
    const { name, shortDescription, number} = product;
    return (
       <Box>
           <Typography>{name}</Typography>
           <Box>
               <Box>{number}</Box>
           </Box>
       </Box>
    );
}

export default Productinfo;