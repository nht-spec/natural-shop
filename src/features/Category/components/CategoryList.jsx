import { Box, Grid } from '@material-ui/core';
import PropTypes from 'prop-types';
import React from 'react';
import Category from './Category';

CategoryList.propTypes = {
    data: PropTypes.number,
};
CategoryList.defaultProps= {
    data: [],
};

function CategoryList({data}) {
    return (
        <Box>
            <Grid container>
              {data.map((category) => (
                  <Grid item key={category.id} xs={12} sm={6} md={4} lg={4}>
                      <Category category={category}/>
                  </Grid>
              ))}
                
                </Grid>
        </Box>
    );
}

export default CategoryList;