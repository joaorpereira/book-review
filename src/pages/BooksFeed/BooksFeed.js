import React, { useContext } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import {Grid, Box, Typography} from '@material-ui/core';
import BookCard from '../../components/BookCard/BookCard'
import { PostContext } from '../../services/Post';
import { AuthContext } from '../../services/Auth';

function BooksReviewFeed() {
    const { posts } = useContext(PostContext);
    const { currentUser } = useContext(AuthContext);
    const classes = useStyles();

    return (
        (!!currentUser) ? (
            <Box className={classes.root}>
                <Grid container spacing={3}>
                    {posts.length > 0 ? (posts.map(item => (<BookCard key={item.id} item={item}/>))) : 
                    <Typography variant="body2" className={classes.message}>There are not reviews</Typography>}
                </Grid>
            </Box>
        ) : (        
            <Box className={classes.root}>
                <Typography variant="body2" className={classes.message}>Sign Up to create a review or post a comment</Typography>
                <Grid container spacing={3}>
                    {posts.map(item => (<BookCard key={item.id} item={item}/>))}
                </Grid>
            </Box>
        )
    )
}

export default BooksReviewFeed

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing(3),
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    marginTop: '5px',
  },
  message: {
    marginTop: '-10px',
    marginBottom: '15px',
    color:'gray',
    margin: '0 auto'
  }
}));