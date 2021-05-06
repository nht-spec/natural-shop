import { Box } from '@material-ui/core';
import React from 'react';
import { Route, Switch, useRouteMatch } from 'react-router';
import DetailPage from './pages/DetailPage';
import ListPage from './pages/ListPage';
import './style.scss';
ProductFeature.propTypes = {
    
};

function ProductFeature(props) {
    const match = useRouteMatch();
    return (
        <Box>
            <Box className='title__product' padding= '0 16%'>
            {/* <h1>ALL PRODUCTS</h1>
            <p>Made of natural and organic ingredients</p> */}
            </Box>
        <Box>
            <Switch>
                <Route path={match.url} exact component={ListPage}/>
                <Route path={`${match.url}/:productId`} component={DetailPage}/>
            </Switch>
            
        </Box>
        </Box>
    );
}

export default ProductFeature;