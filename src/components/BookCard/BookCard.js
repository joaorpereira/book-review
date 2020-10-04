import React, { useState } from 'react'
import CommentsSection from '../../components/CommentsSection/CommentsSection'
import clsx from 'clsx';
import { makeStyles, Card, CardHeader, CardMedia, CardContent, CardActions, Collapse, Avatar, IconButton, Typography, Grid} from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import FavoriteIcon from '@material-ui/icons/Favorite';

function BookCard({item, user}) {

  const { post, id } = item

    const classes = useStyles();
    const [expanded, setExpanded] = useState(false);
  
    const handleExpandClick = () => {
      setExpanded(!expanded);
    };

    return (
      <Grid item xs={3}>
        <Card key={id} className={classes.root}>
            <CardHeader
                avatar={<Avatar aria-label="recipe" className={classes.avatar}>{user.displayName.substr(0,1)}</Avatar>}          
                title={user.displayName}
            />
            <CardMedia
                className={classes.media}
                image={post.imageUrl}
                title={post.imageUrl}
            />
            <CardContent>
                <Typography variant="h5">{post.title}</Typography>
                <Typography variant="body2" color="textSecondary" component="p">{post.content}</Typography>
            </CardContent>
            <CardActions disableSpacing>
                <IconButton aria-label="add to favorites">
                <FavoriteIcon />
                </IconButton>
                <IconButton
                  className={clsx(classes.expand, {[classes.expandOpen]: expanded,})}
                  onClick={handleExpandClick}
                  aria-expanded={expanded}
                  aria-label="show more"
                >
                <ExpandMoreIcon />
                </IconButton>
            </CardActions>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
                <CardContent>
                    <CommentsSection item={item} user={user}/>
                </CardContent>
            </Collapse>
        </Card>            
      </Grid>
    )
}

export default BookCard

const useStyles = makeStyles((theme) => ({
  root: {
    
    maxWidth: 300,
  },
  media: {   
    width: 200,
    height: 270,
    margin: "0 auto",
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
