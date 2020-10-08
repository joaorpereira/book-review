import React, { useContext } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import {Grid, Box} from '@material-ui/core';
import BookCard from '../../components/BookCard/BookCard'
import { PostContext } from '../../services/Post';

function BooksReviewFeed() {
    const { posts } = useContext(PostContext);
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