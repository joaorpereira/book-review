import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Box, Card, CardContent, CardMedia, Typography }from '@material-ui/core';

function BookInfo({item}) {

  const classes = useStyles();
  const { post, id } = item

  return (
     <Card key={id} className={classes.root}>        
        <Box className={classes.image}>
            <CardMedia                
            component="img"
            alt="Contemplative Reptile"
            image={post.imageUrl}
            />
        </Box>
        <CardContent className={classes.content}>
            <Typography gutterBottom variant="h5" component="h2">
                {post.title}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
                {post.synopsis}
            </Typography>
        </CardContent>
    </Card>
  );
}

export default BookInfo

const useStyles = makeStyles({
    root: {
      display:'flex',
      justifyContent: 'center',
      alignItems:'center',
      width: 700,
      height: 350,
      "@media(max-width: 800px)" : {
        flexDirection: 'column',
        width:'80%',
        height: 450,
        padding: '30px auto',
      }  
    },
    image: {
        display: 'flex',
        alignItems: 'center',
        height: 100,
        width: 200,
        margin: '0px 30px 0px 30px',

        "@media(max-width: 800px)" : {
            display: 'flex',
            alignItems: 'center',
            height: 30,
            width: 150,
            margin: '0px',
            padding:0,
        }
    },
    content: {
        width: 450,
        top: '-100px',
        "@media(max-width: 800px)" : {
            transform: 'translate(0%,40%)',
            width: '100%',
            textAlign: 'center',
        }
    },
});