import { Box } from '@material-ui/core';
import React from 'react';
import { Route, Switch, useRouteMatch } from 'react-router';
import ListPage from './Pages/ListPage';

HomeFeatures.propTypes = {
    
};

function HomeFeatures(props) {
    const match = useRouteMatch();
    return (
        <Box>
            <Switch>
                <Route path={match.url} exact component={ListPage}/>
            </Switch>
        </Box>
    );
}

export default HomeFeatures;