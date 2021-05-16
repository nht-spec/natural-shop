import { Box, Typography } from '@material-ui/core';
import PropTypes from 'prop-types';
import React from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import { STATIC_HOST } from '../../../constants/index';
import { addToCart } from '../../Cart/cartSlice';
import AddToCartForm from '../../Product/components/AddToCartForm';

Category.propTypes = {
    category: PropTypes.object,
};

function Category({category}) {
    const thumbnailUrl = `${STATIC_HOST}${category.image?.url}` 
    const history= useHistory();
    const handleClick =() => {
        history.push(`/products/${category.id}`);
    }
    const dispatch = useDispatch()
    const handleAddToCartSubmit = (formValues) =>{
        const action = addToCart({
            id: category.id,
            category,
            quantity: formValues.quantity,
        })
        console.log(action);
        dispatch(action);
        };
    return (
        <Box>
        <Box padding={1}>
        <Box onClick={handleClick} ><img width='100%' src={thumbnailUrl}/></Box>
        <Box paddingTop={1.5}>
        <Typography variant='body2'>{category.name}</Typography>
        </Box>
        <Box marginTop='5px'>
        <Typography className='category__price' variant='body3'>${category.priceProducts}</Typography>
        </Box>
        </Box>
        <button className='card__btn'>
            <AddToCartForm onSubmit={handleAddToCartSubmit}/>
            </button>     
        </Box>
    );
}

export default Category;