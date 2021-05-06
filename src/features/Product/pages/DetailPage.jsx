import { Box, Container, Grid, makeStyles, Paper } from '@material-ui/core';
import React from 'react';
import { useRouteMatch } from 'react-router';
import Productinfo from '../components/Productinfo';
import ProductThumbnail from '../components/ProductThumbnail';
import useProductDetail from '../hooks/useProductDetail';

DetailPage.propTypes = {
    
};
const useStyles = makeStyles(theme =>({
    root: {},
    left: {
        width: '250px'
    },
    right: {
        flex: '1 1 0',
        margin:'2 2 2 2',
    },
}));

function DetailPage() {
    const classes= useStyles();
    const { 
        params: { productId},
     } = useRouteMatch();
     const {product, loading} = useProductDetail(productId);
     if(loading) {
         <Box>loading</Box>
     }
    return (
        <Box>
            <Container>
                <Paper elevation={1}>
                    <Grid container>
                        <Grid item className={classes.left}>
                        <ProductThumbnail product={product}/>
                        </Grid>
                        <Grid item className={classes.right}>
                            <Productinfo product={product}/>
                        </Grid>
                    </Grid>
                </Paper>
            </Container>
        </Box>
    );
}

export default DetailPage;