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
                const {data} =await productApi.getAll({ _page: 2, _limit: 12});
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
           <h1>SCENTED CANDLES</h1>
            <p>Our naturally fragranced candles come in plastic-free, high quality containers</p>
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