import { Box, Container, Grid, makeStyles } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import categoryApi from '../../../api/categoryApi';
import CategoryList from '../components/CategoryList';
import CategorySkeletonList from '../components/CategorySkeletonList';

CatePage.propTypes = {
    
};

const useStyles= makeStyles(theme =>({
    root: {},
    left:{
        width: '250p'
    },
    right:{
        flex: ' 1 1 auto'
    },
}))


function CatePage(props) {
    const classes = useStyles();
    const [categoryList, setCategoryList] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
    (async () => {
        try {
            const {data} =await categoryApi.getAll({ _page: 1, _limit:20});
            setCategoryList(data);        
        } catch (error) {};
        setLoading(false);
    })();
    }, []);
    return (
        <Box>
            <Container>
                <Grid container spacing={1}>
                    <Grid item className={classes.right}>
                        {loading ? <CategorySkeletonList/> : <CategoryList data={categoryList}/>}
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
}

export default CatePage;