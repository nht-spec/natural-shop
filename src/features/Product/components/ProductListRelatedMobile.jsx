import { Box, Grid } from '@material-ui/core';
import PropTypes from 'prop-types';
import React from 'react';
import Product from './Product';
ProductListRelatedMobile.propTypes = {
    data: PropTypes.number,
};

ProductListRelatedMobile.defaultProps = {
    data: [],
}

function ProductListRelatedMobile({data}) {
    return (
       <Box>
           <Grid container>
               {data.map((product)=> (
                   <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
                  <Product product={product}/>
                   </Grid>
               ))}
           </Grid>
       </Box>
    );
}

export default ProductListRelatedMobile;