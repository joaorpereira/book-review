import React, { useEffect, useState } from 'react'
import { Divider, makeStyles, Typography} from '@material-ui/core';
import { db } from '../../services/firebase'

function BookCard({item}) {

  const { id } = item

    const classes = useStyles();
    const [comments, setComments] = useState([])
  
    useEffect(() => {
      if(id){
        db.collection("posts")
          .doc(id)
          .collection("comments")
          .orderBy("timestamp", "asc")
          .onSnapshot((snapshot) => {
            setComments(snapshot.docs.map(doc => doc.data()))
          })
      }
    },[id])

    return (
      <div className={classes.container} >
        <Divider light />
        {(comments.length !== 0) ? (
            <div style={{margin: '0px', padding: '0px'}}>
                {comments.map(comment => {
                    return (
                        <div>
                            <Typography variant="body2" className={classes.comments}>
                              <strong>{comment.username}</strong>
                              {": "}{comment.text}
                            </Typography>
                        </div>
                    )
                })}
            </div>
        ) :  <p className={classes.comments} style={{color: "grey"}}>No comments</p>}            
      </div>
    )
}

export default BookCard

const useStyles = makeStyles({
  container: {
    margin: '10px 0px 10px 0px',
    minHeight: '50px',
  },
  comments:{
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    margin: '0px 0px 0px 16px',
    paddingTop: '5px',
    textTransform: 'capitalize',
    color: "#1b262c",
  },
});
