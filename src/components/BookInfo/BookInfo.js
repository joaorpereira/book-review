import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Box, Card, CardContent, CardMedia, Grid, Typography }from '@material-ui/core';
import image from '../../images/nike.jpg'

function BookInfo() {
  const classes = useStyles();

  return (
    <Grid item>
        <Card className={classes.root}>
            <Box className={classes.image}>
                <CardMedia                
                component="img"
                alt="Contemplative Reptile"
                image={image}
                />
            </Box>
            <CardContent className={classes.content}>
                <Typography gutterBottom variant="h5" component="h2">
                    Lizard
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                    Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                    across all continents except Antarctica
                </Typography>
            </CardContent>
        </Card>
    </Grid>
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
        alignItems:'center',
        width: 250,
        height: 475,
        padding: '20px',
      }  
    },
    image: {
        display: 'flex',
        alignItems: 'center',
        height: 400,
        width: 350,
        margin: '0px 30px 0px 30px',

        "@media(max-width: 800px)" : {
            display: 'flex',
            alignItems: 'center',
            height: 100,
            width: 150,
            margin: '0px'
        }
    },
    content: {
        transform: 'translate(0%,-65%)',
        "@media(max-width: 800px)" : {
            transform: 'translate(0%,40%)',
        }
    }
    
});