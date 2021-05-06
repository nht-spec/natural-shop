import { Box } from '@material-ui/core';
import React from 'react';
import { Route, Switch, useRouteMatch } from 'react-router';
import HomePage from './Pages/HomePage';

HomeFeatures.propTypes = {
    
};

function HomeFeatures(props) {
    const match = useRouteMatch();
    return (
        <Box>
            <Switch>
                <Route path={match.url} exact component={HomePage}/>
            </Switch>
        </Box>
    );
}

export default HomeFeatures;