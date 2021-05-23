import React from 'react';
import PropTypes from 'prop-types';
import { Box, Grid } from '@material-ui/core';
import { Skeleton } from '@material-ui/lab';

ProductSkeletonList.propTypes = {
    data: PropTypes.array,
    
};
ProductSkeletonList.defaultProps= {
    data: [],
};

function ProductSkeletonList({data}) {
    return (
      <Box>
          <Grid container>
              {Array.from(new Array(data)).map((x, index) => (
                  <Grid item key={index} xs={6} sm={6} md={4} lg={4.5}>
                      <Box paddingTop={1}>
                      <Skeleton variant='rect' width='100%' height={118}/>
                      <Skeleton/>
                      <Skeleton width='60%'/>
                      </Box>
                  </Grid>
             ))}
          </Grid>
      </Box>
    );
}

export default ProductSkeletonList;