import { Box } from '@material-ui/core';
import PropTypes from 'prop-types';
import React from 'react';
import { STATIC_HOST } from '../../../constants';

ProductThumbnail.propTypes = {
    product: PropTypes.object,
};

function ProductThumbnail({product}) { 
    const thumbnailUrl = `${product.image?.url}` 

    return (
        <Box className='thumbnail__product'>         
         <img src={thumbnailUrl}alt=""/>
        </Box>
    );
}

export default ProductThumbnail;