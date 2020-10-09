import React, { useState } from 'react'
import BooksPosts from '../BookPosts/BookPosts'
import Comments from '../Comments/Comments'
import clsx from 'clsx';
import { makeStyles, Card, IconButton, Grid, Box, Typography, Button } from '@material-ui/core'
import AddCommentIcon from '@material-ui/icons/AddComment'
import AddCommentOutlinedIcon from '@material-ui/icons/AddCommentOutlined'
import ShowReviews from './ShowReviews'
import ShowComments from './ShowComments'

function BookCard({item}) {

  const { id, post } = item

  const classes = useStyles();
  const [addComment, setAddComment] = useState(false);
  const [showReview, setShowReview] = useState(false);

  const handleExpandComment = () => {
    setAddComment(!addComment);
  };
  const handleExpandReview = () => {
    setShowReview(!showReview);
  };

  return (
    <Grid item lg={3} md={4} sm={12} className={classes.gridItem}>
      <Card key={id} className={classes.root}>          
          <BooksPosts item={item}/>
          <Box style={{margin: '0', paddding: '0', display:'flex', justifyContent:'space-between', height:'20px'}}>            
            <Button
              className={classes.review}
              onClick={handleExpandReview}
              aria-expanded={showReview}
            > 
              <Typography variant="overline">Review</Typography>       
            </Button>          
            <IconButton
              style={{margin: '0', paddding: '0', display:'flex', justifyContent:'flex-end'}}
              className={clsx(classes.expand)}
              onClick={handleExpandComment}
              aria-expanded={addComment}
            > 
              {addComment ? <AddCommentIcon /> : <AddCommentOutlinedIcon />}            
            </IconButton>
          </Box>
          <ShowComments addComment={addComment} item={item}/>
          <ShowReviews showReview={showReview} post={post}/>
          <Comments item={item}/>
      </Card>            
    </Grid>
  )
}

export default BookCard

const useStyles = makeStyles((theme) => ({
  gridItem: {
    display: 'flex', 
    flexDirection: 'flex-start',
    "@media(max-width: 800px)" : {
      margin: '0 auto',
    }
  },
  root: {
    width: 300,
    minHeight: 500,
    margin: '0 auto',
  },
  review: {
    margin: '0',
    marginLeft: '9px', 
    paddding: '0', 
    display:'flex', 
    justifyContent:'flex-start',
    fontSize: '10px',
  },
}));


