import React from 'react'
import { CardContent, Collapse, Typography } from '@material-ui/core';

function ShowReviews({showReview, post}) {

  return (
        <Collapse in={showReview} timeout="auto" unmountOnExit>
            <CardContent style={{textAlign : 'left'}}>                  
                <Typography variant="body2" color="textSecondary">
                <strong>Review: </strong>{post.content}
                </Typography>                  
            </CardContent>
        </Collapse>
  )
}

export default ShowReviews

