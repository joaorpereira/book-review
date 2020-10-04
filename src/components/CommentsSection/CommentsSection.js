import React, { useEffect, useState } from 'react'
import { Button, makeStyles, TextField } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import { goToBooksFeed } from '../../routes/Cordinator';
import firebase from 'firebase'
import { db } from '../../services/firebase'
import AddIcon from '@material-ui/icons/Add';

function CommentsSection({user, item}) {

    const { id } = item

    console.log(id)
    
    const history = useHistory();
    const classes = useStyles();

    const [form, setForm] = useState({comment: ''})
    const [comments, setComments] = useState([])

    const handleChange = (e) => {
        const { value, name } = e.target
        setForm({...form, [name] : value})
    }

    const postComment = (e) => {
        e.preventDefault()

        const element = document.getElementById("postComment_form")
        const validation = element.checkValidity()
        element.reportValidity()

        if(validation){
            
            db.collection("posts").doc(id).collection("comments").add({
                text: form.comment,
                username: user.displayName,
                timestamp: firebase.firestore.FieldValue.serverTimestamp()
            })

            setForm("")          
            goToBooksFeed(history)

        } else{
            alert("Usuário ou senha incorretos!")
        }
    }

    useEffect(() => {
        if(id){
            db.collection("posts")
              .doc(id).collection("comments")
              .orderBy("timestamp", "asc")
              .onSnapshot((snapshot) => {
                  setComments(snapshot.docs.map((doc) => doc.data() ))
              })
        }
    },[id])
    
    return (
        <div>
            {comments.length > 0 ? (
                <div>
                    {comments.map(comment => {
                        return (
                            <div key={comment.id}>
                                <h3>{user.displayName}</h3><p>{comment}</p>
                            </div>
                        )
                    })}
                </div>
            ) :  <p>Don't have comments</p>}
            
            {user ? 
                ( <div>
                    <form className={classes.form} id="postComment_form">
                        <TextField
                            value={form.comment}
                            onChange={handleChange}
                            variant="outlined"
                            size="small"
                            name="comment"
                            label="Comment"
                        />
                        <Button
                            type="submit"                        
                            onClick={postComment}
                            startIcon={<AddIcon style={{ fontSize: 30 }}/>}
                        />
                    </form>              
                  </div>
                ):  <p>Log in to post a comment</p>
            }
        </div>
    )
}

export default CommentsSection

const useStyles = makeStyles({
    form: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: '100%',
    },
});

