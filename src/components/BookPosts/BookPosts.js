import React from 'react'
import { makeStyles, CardHeader, CardMedia, Box, Avatar, Typography} from '@material-ui/core';
import { secondaryColor } from '../../constants/colors';
// import { Link, useHistory } from 'react-router-dom';
// import { goToBookReview } from '../../routes/Cordinator';

function BookPosts({item}) {

  // const history = useHistory();
  
  const { post, id } = item
  const classes = useStyles();

  return (
    <Box key={id} className={classes.bookInformation}>
      <CardHeader
          style={{textTransform: 'capitalize'}}
          avatar={<Avatar className={classes.avatar}>{post.username.substr(0,1)}</Avatar>}          
          title={post.username}
      />
      <Typography className={classes.bookTitle}>{post.title}</Typography>
      {/* <Link href="#" onClick={goToBookReview(history)}> */}
        <CardMedia
            component={"img"}
            className={classes.media}            
            image={post.imageUrl}
            title={post.imageUrl}
        />          
      {/* </Link> */}
    </Box>           
  )
}

export default BookPosts

const useStyles = makeStyles({
  bookInformation: {
    height: 330,    
  },
  media: {   
    width: 150,
    height: 200,
    margin: "0 auto",
  },
  bookTitle : {
    textAlign: 'center',
    height: '55px',
    fontSize: '15px',
    fontWeight: 'bold'
  },
  avatar: {
    height: '28px',
    width: '28px',
    backgroundColor: secondaryColor,
  }
});
