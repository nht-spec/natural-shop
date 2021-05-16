import { Box, Container, Grid, makeStyles } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import productApi from '../../../api/productApi';
import Footer from '../../footer';
import ProductList from '../../Product/components/ProductList';
import ProductSkeletonList from '../../Product/components/ProductSkeletonList';
import './style.scss';
ListPage.propTypes = {
    
};
const useStyles = makeStyles(theme =>({
    root: {},
    left: {
        width: '250px'
    },
    right: {
        flex: '1 1 0',
    },
}));
function ListPage(props) {
    const classes = useStyles();
    const [productList, setProductList]= useState([]);
    const [loading, setLoading]= useState(true);
    useEffect(() => {
        (async () => {
            try {
                const {data} =await productApi.getAll({ _page: 1, _limit: 9});
                setProductList(data);
            } catch (error) {
                console.log('fail', error);
            }
            setLoading(false);
        })();
    }, []);

    return (
        <Box>
            <Box className='title__product'>
            <h1>PROBIOTIC SOAPS</h1>
            <p>All our soaps are handcrafted and alcohol free</p>
            </Box>
            <Container>
                <Grid container spacing={5}>
                    <Grid item className={classes.right}>
                        {loading ? <ProductSkeletonList length={9}/> : <ProductList data={productList}/>}
                    </Grid>
                </Grid>
            </Container>
            <Box className='footer__pages'>
            <p></p>
            <Footer/>
            </Box> 
        </Box>
    );
}

export default ListPage;