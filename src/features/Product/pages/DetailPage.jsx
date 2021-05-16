import { Box, Button, Container, Grid, makeStyles, Paper } from '@material-ui/core';
import ArrowBackIosOutlinedIcon from '@material-ui/icons/ArrowBackIosOutlined';
import ArrowForwardIosOutlinedIcon from '@material-ui/icons/ArrowForwardIosOutlined';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import TreeItem from '@material-ui/lab/TreeItem';
import TreeView from '@material-ui/lab/TreeView';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory, useRouteMatch } from 'react-router';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import productApi from '../../../api/productApi';
import { addToCart } from '../../Cart/cartSlice';
import AddToCartForm from '../components/AddToCartForm';
import Productinfo from '../components/Productinfo';
import ProductList from '../components/ProductList';
import ProductThumbnail from '../components/ProductThumbnail';
import useProductDetail from '../hooks/useProductDetail';
import './style.scss';
DetailPage.propTypes = {
    
};
const useStyles = makeStyles(theme =>({
    root: {
        width: theme.spacing(130),
        marginLeft: theme.spacing(12),
        marginTop: theme.spacing(3),
    },
    left: {
        width: '250px'
    },
    right: {
        zIndex:'2',
    },
}));

function DetailPage() {
    const [productList, setProductList]= useState([]);
    const [productList2, setProductList2]= useState([]);
    const [productList3, setProductList3]= useState([]);
    const [productList4, setProductList4]= useState([]);

    const [loadingg, setLoadingg]= useState(true);
    const dispatch = useDispatch()
    const classes= useStyles();
    const history= useHistory();
    const handleClickNextPage =() => {
        history.push(`/products/${product.id+1}`);
    }
    const handleClickBackPage =()=>{
        history.push(`/products/${product.id-1}`)
    }
    const { 
        params: { productId},
     } = useRouteMatch();
     const {product,loading} = useProductDetail(productId);
     if(loading) {
         <Box>loading</Box>
     }
    const handleAddToCartSubmit = (formValues) =>{
    const action = addToCart({
        id: product.id,
        product,
        quantity: formValues.quantity,
    })
    console.log(action);
    dispatch(action);
    };
    useEffect(() => {
        (async () => {
            try {
                const {data} =await productApi.getAll({_page: 1, _limit: 3});
                setProductList(data);
            } catch (error) {
                console.log('fail', error);
            }
            setLoadingg(false);
        })();
    }, []);
    useEffect(() => {
        (async () => {
            try {
                const {data} =await productApi.getAll({ _page: 2, _limit: 3});
                setProductList2(data);
            } catch (error) {
                console.log('fail', error);
            }
            setLoadingg(false);
        })();
    }, []);
    useEffect(() => {
        (async () => {
            try {
                const {data} =await productApi.getAll({ _page: 3, _limit: 3});
                setProductList3(data);
            } catch (error) {
                console.log('fail', error);
            }
            setLoadingg(false);
        })();
    }, []);
    useEffect(() => {
        (async () => {
            try {
                const {data} =await productApi.getAll({ _page: 4, _limit: 3});
                setProductList4(data);
            } catch (error) {
                console.log('fail', error);
            }
            setLoadingg(false);
        })();
    }, []);
    
    return (
        <Box>
            <Container>
                <Paper  className={classes.root} elevation={0}>
                    <Box className='page__btn'>
                    <Box className='back__btn'>
                    <Button onClick={handleClickBackPage} >
                      <ArrowBackIosOutlinedIcon/>Prev
                    </Button>
                    </Box>
                    <Box className='next__btn'>
                        <Button onClick={handleClickNextPage} >
                           Next< ArrowForwardIosOutlinedIcon/>
                        </Button>
                    </Box>
                    </Box>
                    <Grid container>
                        <Grid item className={classes.left}>
                         <Box className='thumbnail__page'>
                            <ProductThumbnail product={product}/>
                         </Box>
                        </Grid>
                        <Grid item className={classes.right}>
                          <Box className='info__page'>
                             <Productinfo product={product}/>
                             <Box>
                             <AddToCartForm  onSubmit={handleAddToCartSubmit}/>
                             </Box>
                          </Box>
                          <Box className='productsinfo__list'>
                          <TreeView className='products__title'
                             defaultCollapseIcon={<ExpandMoreIcon />}
                             defaultExpandIcon={<ChevronRightIcon />}
                           >
                             <TreeItem style={{width:'450px'}} nodeId="1" label="Product Info">
                               <p >I'm a product detail. I'm a great place to add more information about your product such as sizing, material, care and cleaning instructions. This is also a great space to write what makes this product special and how your customers can benefit from this item.</p>
                             </TreeItem> 
                          </TreeView>
                          <TreeView
                             defaultCollapseIcon={<ExpandMoreIcon />}
                             defaultExpandIcon={<ChevronRightIcon />}
                           >
                             <TreeItem style={{width:'450px'}} nodeId="1" label="Return & refund policy">
                               <p >We offer a full money-back guarantee for all purchases made on our website. If you are not satisfied with the product that you have purchased from us, you can get your money back no questions asked. You are eligible for a full reimbursement within 14 calendar days of your purchase. After the 14-day period you will no longer be eligible and won't be able to receive a refund. We encourage our customers to try the product (or service) in the first two weeks after their purchase to ensure it fits your needs.</p>
                             </TreeItem> 
                          </TreeView>
                          <TreeView
                             defaultCollapseIcon={<ExpandMoreIcon />}
                             defaultExpandIcon={<ChevronRightIcon />}
                           >
                             <TreeItem className='products__shipping'style={{width:'450px'}} nodeId="1" label="Shipping Info">
                               <p >Due to Covid-19, many of our shipping carriers are experiencing delays in delivering orders. Please expect that after your order has shipped, it might experience carrier delays and may take longer than usual to receive. The health and safety of our customers and teams is our #1 priority and we appreciate your patience and understanding as we work to ship your order. If anything about your experience is not what you expected,</p>
                             </TreeItem> 
                          </TreeView>
                          </Box>
                        </Grid>
                    </Grid>
                </Paper>
            </Container>
            
            <Box className='slideshow__product'>
            <h2>Related Products</h2>
            <Slide easing="ease">

            <ProductList data={productList}/>
            <ProductList data={productList2}/>
            <ProductList data={productList3}/>
            <ProductList data={productList4}/>

        </Slide>
            </Box>
        </Box>
    );
}

export default DetailPage;