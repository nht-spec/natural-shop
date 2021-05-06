import { Box, Container, Grid, makeStyles } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import productHomeApi from '../../../api/productHomeApi';
import ProductHomeList from '../components/ProductHomeList';
import ProductSkeletonList from '../components/ProductHomeSkeletonList';

HomePage.propTypes = {
    
};
const useStyles= makeStyles(theme =>({
    root: {},
    left:{
        width: '250px'
    },
    right:{
        flex: ' 1 1 auto'
    },
}))


function HomePage(props) {
    const classes = useStyles();
    const [productHomeList, setProductHomeList]=useState([]);
    const [loading, setLoading]=useState(true);

    useEffect(() => {
        (async () => {
            try {
                const {data} = await productHomeApi.getAll({_page: 1, _limit:10});
                setProductHomeList(data);
                console.log(data);
            } catch (error) {
                
            }
            setLoading(false);
        })();
    }, []);
    return (
       <Box>
           <Container>
               <Grid container>
                   <Grid item className={classes.right}>
                       {loading ? <ProductSkeletonList/>  : <ProductHomeList data={productHomeList}/>}
                   </Grid>
               </Grid>
           </Container>
       </Box>
    );
}

export default HomePage;