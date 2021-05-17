import { Box, Typography } from '@material-ui/core';
import PropTypes from 'prop-types';
import React from 'react';
import { useSelector } from 'react-redux';
import { cartItemsCountSelector, cartItemsSelector, cartTotalSelector } from './selectors';
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
    const cartQuantity = useSelector(cartItemsCountSelector);
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
                         <p >{product.product.name}</p>
                         <p >{product.product.priceProducts}</p>
                         <p>{product.quantity}</p>
                         </div>
                     </div>
                 </div>
            ))}
            <p>{cartQuantity}</p>
      
            </div>
            </div>
    );
}

export default CartFeature;