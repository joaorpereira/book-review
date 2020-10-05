import React, { useState } from 'react'
import BooksPosts from '../BookPosts/BookPosts'
import Comments from '../Comments/Comments'
import CreateComment from '../CreateComment/CreateComment'
import clsx from 'clsx';
import { makeStyles, Card,CardContent, Collapse, IconButton, Grid} from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

function BookCard({item, user}) {

  const { id } = item

  const classes = useStyles();
  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Grid item xs={3}>
      <Card key={id} className={classes.root}>
          <BooksPosts item={item} user={user}/>
          <Comments item={item}/>
          <IconButton 
            style={{display:'flex', justifyContent:'right'}}
            className={clsx(classes.expand, {[classes.expandOpen]: expanded,})}
            onClick={handleExpandClick}
            aria-expanded={expanded}
          >
            <ExpandMoreIcon />
          </IconButton>                
          <Collapse in={expanded} timeout="auto" unmountOnExit>
              <CardContent style={{display:'flex', justifyContent:'center'}}>
                  <CreateComment item={item} user={user}/>
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
    maxHeight: 600,
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
