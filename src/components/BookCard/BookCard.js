import React, { useState } from 'react'
import BooksPosts from '../BookPosts/BookPosts'
import Comments from '../Comments/Comments'
import clsx from 'clsx';
import { makeStyles, Card, IconButton, Grid, Box } from '@material-ui/core'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
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
          <Comments item={item}/>
          <Box style={{margin: '0', paddding: '0', display:'flex', justifyContent:'space-between'}}>            
            <IconButton
              style={{margin: '0', paddding: '0', display:'flex', justifyContent:'flex-start'}}
              className={clsx(classes.expand, {[classes.expandOpen]: showReview,})}
              onClick={handleExpandReview}
              aria-expanded={showReview}
            > 
              <ExpandMoreIcon />       
            </IconButton>          
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
    minHeight: 510,
    margin: '0 auto',
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
}));


