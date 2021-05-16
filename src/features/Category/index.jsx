import React from 'react';
import { Route, Switch, useRouteMatch } from 'react-router';
import DetailPage from '../Product/pages/DetailPage';
import ListPage from './Pages/ListPage';

CategoryFeature.propTypes = {
    
};

function CategoryFeature(props) {
    const match = useRouteMatch();
    return (
        <div>
            <Switch>
                <Route path={match.url} exact component={ListPage}/>
                <Route path={`${match.url}/:productId`} component={DetailPage}/>

            </Switch>
        </div>
    );
}

export default CategoryFeature;