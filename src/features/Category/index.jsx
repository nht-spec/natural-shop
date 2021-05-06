import React from 'react';
import { Route, Switch, useRouteMatch } from 'react-router';
import CatePage from './Pages/CatePage';

CategoryFeature.propTypes = {
    
};

function CategoryFeature(props) {
    const match = useRouteMatch();
    return (
        <div>
            <Switch>
                <Route path={match.url} exact component={CatePage}/>
            </Switch>
        </div>
    );
}

export default CategoryFeature;