import { Box, Grid } from '@material-ui/core';
import PropTypes from 'prop-types';
import React from 'react';
import Home from './Home';

ProductHomeList.propTypes = {
    data: PropTypes.number,
    
};
ProductHomeList.defaultProps= {
    data: [],
};

function ProductHomeList({data}) {
    return (
      <Box>
          <Grid container>
              {data.map((home) => (
                  <Grid item key={home.id} xs={12} sm={6} md={4} lg={4}>
                     <Home home={home}/>
                  </Grid>
              ))}
          </Grid>
      </Box>
    );
}

export default ProductHomeList;