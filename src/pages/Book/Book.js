import React from 'react'
import { Grid, makeStyles } from '@material-ui/core'
import BookInfo from '../../components/BookInfo/BookInfo'

function BooksReviewFeed() {
    const classes = useStyles()
    return (
        <Grid className={classes.root}container spacing={24} justify="center">
            <BookInfo/>
        </Grid>
    )
}

export default BooksReviewFeed

const useStyles = makeStyles({
    root: {
        height: '100%', 
        maxWidth: '100%', 
        marginTop:'100px',
        "@media(max-width: 800px)" : {
            marginTop:'20px',
          }  
    }
});
