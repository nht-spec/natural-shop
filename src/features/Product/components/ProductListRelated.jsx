import { Box, Grid } from '@material-ui/core';
import PropTypes from 'prop-types';
import React from 'react';
import Product from './Product';
ProductListRelated.propTypes = {
    data: PropTypes.number,
};

ProductListRelated.defaultProps = {
    data: [],
}

function ProductListRelated({data}) {
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

export default ProductListRelated;