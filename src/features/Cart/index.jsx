import { Box, Typography } from '@material-ui/core';
import PropTypes from 'prop-types';
import React from 'react';
import { useSelector } from 'react-redux';
import { cartItemsSelector, cartTotalSelector } from './selectors';
import './styles.scss';
CartFeature.propTypes = {
    product: PropTypes.object,
    cartItems: PropTypes.array,
    onSubmit : PropTypes.func,
};

CartFeature.defaulProps = {
    cartItems: [],
}


function CartFeature(props) {
    const cartTotal = useSelector(cartTotalSelector);
    const cartItems = useSelector(cartItemsSelector); 
    return (
        <div>
            <Box>
            <Typography>Total Cart</Typography>
            <Typography>My Cart</Typography>
            </Box>
            <Typography>Product</Typography>
            <Typography>Price Product</Typography>
            <Typography>Total Product</Typography>
            Total: {cartTotal}
            <div className='product__list'>
            {cartItems.map((product) => (
                 <div key={product.product.name}>
                     <div>
                         <img style={{width:'4%'}} src={product.product.image.name} alt="error" />
                         <div className='product__src'>
                         <p className='product__name'>{product.product.name}</p>
                         <p className='product__prices'>{product.product.priceProducts}</p>
                         </div>
                     </div>
                 </div>
            ))}
      
            </div>
            </div>
    );
}

export default CartFeature;