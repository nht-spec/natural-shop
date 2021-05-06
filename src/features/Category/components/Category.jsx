import { Box, Typography } from '@material-ui/core';
import PropTypes from 'prop-types';
import React from 'react';
import { STATIC_HOST } from '../../../constants/index';

Category.propTypes = {
    category: PropTypes.object,
};

function Category({category}) {
    const thumbnailUrl = `${STATIC_HOST}${category.body?.url}` 

    return (
        <Box padding={1}>
        <Box >
        <img width='100%' src={thumbnailUrl}/>
        </Box>
        <Box paddingTop={1.5}>
        <Typography variant='body2'>{category.name}</Typography>
        <Box marginTop='5px'>
        <Typography className='category__price' variant='body3'>${category.number}</Typography>
        </Box>
        <Box marginTop={1}>
        <button className='card__btn'>add to card</button>
        </Box>
        </Box>
    </Box>
    );
}

export default Category;