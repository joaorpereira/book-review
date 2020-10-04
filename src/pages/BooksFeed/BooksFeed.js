import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import BookCard from '../../components/BookCard/BookCard'

function BooksReviewFeed({user, posts}) {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Grid container spacing={2}>
                <Grid container item xs={12} spacing={2}>
                        {posts.map(item => {
                            return (
                                <BookCard key={item.id} item={item} user={user}/>
                            )
                        })}
                </Grid>
            </Grid>
        </div>
    )
}

export default BooksReviewFeed

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing(4),
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));