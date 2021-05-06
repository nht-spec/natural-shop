import { Box, Container, Grid, makeStyles } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import productApi from '../../../api/productApi';
import ProductList from '../components/ProductList';
import ProductSkeletonList from '../components/ProductSkeletonList';

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
                const {data} =await productApi.getAll({ _page: 1, _limit: 30});
                setProductList(data);
            } catch (error) {
                console.log('fail', error);
            }
            setLoading(false);
        })();
    }, []);
      
    return (
        <Box>
             <h1>ALL PRODUCTS</h1>
            <p>Made of natural and organic ingredients</p>
            <Container>
                <Grid container spacing={5}>
                    <Grid item className={classes.right}>
                        {loading ? <ProductSkeletonList length={30}/> : <ProductList data={productList}/>}
                    </Grid>
                </Grid>
            </Container>

        </Box>
    );
}

export default ListPage;