import React from 'react';
import PropTypes from 'prop-types';
import { Box, Grid } from '@material-ui/core';
import { Skeleton } from '@material-ui/lab';
ProductSkeletonList.propTypes = {
    length: PropTypes.number,
};

ProductSkeletonList.defaultProps = {
   data: 10,
}

function ProductSkeletonList({length}) {
    return (
       <Box>
           <Grid container>
               {Array.from(new Array(length)).map((x, index)=> (
                   <Grid item key={index} xs={12} sm={6} md={4} lg={4.5}>
                        <Box padding={4} className='skeleton__page'>
                        <Skeleton variant='rect' width="100%" height={118} />
                        <Skeleton/>
                        <Skeleton width = '100%'/>
                        </Box>
                   </Grid>
               ))}
           </Grid>
       </Box>
    );
}

export default ProductSkeletonList;