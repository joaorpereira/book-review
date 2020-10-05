import React from 'react'
import { makeStyles, CardHeader, CardMedia, CardContent,Avatar, Typography} from '@material-ui/core';

function BookPosts({item}) {

  const { post } = item
  const classes = useStyles();

  return (
    <div className={classes.bookInformation}>
      <CardHeader
          style={{textTransform: 'capitalize'}}
          avatar={<Avatar className={classes.avatar}>{post.username.substr(0,1)}</Avatar>}          
          title={post.username}
      />
      <Typography className={classes.bookTitle}>{post.title}</Typography>
      <CardMedia
          className={classes.media}
          image={post.imageUrl}
          title={post.imageUrl}
      />
      <CardContent style={{textAlign : 'left'}}>                  
        <Typography variant="body2" color="textSecondary">
          <strong>Review: </strong>{post.content}
        </Typography>                  
      </CardContent>
    </div>           
  )
}

export default BookPosts

const useStyles = makeStyles({
  bookInformation: {
    height: 415,    
  },
  media: {   
    width: 150,
    height: 210,
    margin: "0 auto",
  },
  bookTitle : {
    textAlign: 'center',
    height: '55px',
  },
  avatar: {
    height: '28px',
    width: '28px'
  }
});
