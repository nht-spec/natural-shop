import { Box, Typography } from '@material-ui/core';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { Animate } from 'react-rebound';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import { STATIC_HOST } from '../../../constants';
import { addToCart } from '../../Cart/cartSlice';
import AddToCartForm from './AddToCartForm';
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
    const dispatch = useDispatch()
    const handleAddToCartSubmit = (formValues) =>{
        const action = addToCart({
            id: product.id,
            product,
            quantity: formValues.quantity,
        })
        console.log(action);
        dispatch(action);
        };
    const [hovered, setHovered] = useState(false);

    return (
        <Box>
        <Box padding={1} onClick={handleClick}>
            <Box >
            <Animate scaleX={hovered ? 0.98 : 1} scaleY={hovered ? 0.98 : 1}>
      <button style={{borderStyle:'none', backgroundColor:'white', cursor:'pointer'}} onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>
            <img width='100%' src={thumbnailUrl}/>
      </button>
    </Animate>
            </Box>
            <Box paddingTop={1.5}>
            <Typography variant='body2'>{product.name}</Typography>
            <Box marginTop='5px'>
            <Typography className='product__price' variant='body3'>${product.priceProducts}</Typography>
            </Box>
            </Box>
        </Box>
            <Box >  
            <AddToCartForm onSubmit={handleAddToCartSubmit}/>
            </Box>
            
        </Box>
    );
}

export default Product;