import { Box, Typography } from '@material-ui/core';
import PropTypes from 'prop-types';
import React from 'react';
import { useHistory } from 'react-router';
import { STATIC_HOST } from '../../../constants';
import './style.scss';
Product.propTypes = {
    product: PropTypes.object,
};

function Product({product}) { 
    const thumbnailUrl = `${STATIC_HOST}${product.image?.url}` 
    const history= useHistory();
    const handleClick =() => {
        history.push(`/products/${product.id}`);
    }
    return (
        <Box padding={1} onClick={handleClick}>
            
            <Box >
            <img width='100%' src={thumbnailUrl}/>
            </Box>
            <Box paddingTop={1.5}>
            <Typography variant='body2'>{product.name}</Typography>
            <Box marginTop='5px'>
            <Typography className='product__price' variant='body3'>${product.number}</Typography>
            </Box>
            <Box marginTop={1}>
            <button className='card__btn'>add to card</button>
            </Box>
            </Box>
        </Box>
    );
}

export default Product;