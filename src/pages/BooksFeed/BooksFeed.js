import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import {Grid, Box} from '@material-ui/core';
import BookCard from '../../components/BookCard/BookCard'

function BooksReviewFeed({posts}) {
    const classes = useStyles();   
    return (
        <Box className={classes.root}>
            <Grid container spacing={3}>
                {posts.map(item => {
                    return (
                        <BookCard key={item.id} item={item}/>
                    )
                })}
            </Grid>
        </Box> 
    )
}

export default BooksReviewFeed

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing(3),
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
}));