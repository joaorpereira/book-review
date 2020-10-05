import React, { useState } from 'react'
import { Button, makeStyles, TextField } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import { goToBooksFeed } from '../../routes/Cordinator';
import AddIcon from '@material-ui/icons/Add';
import firebase from 'firebase'
import { db } from '../../services/firebase'

function CreateComment({user, item}) {

    const { id } = item
    
    const history = useHistory();
    const classes = useStyles();

    const [form, setForm] = useState({comment: ''})
 
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
            alert("User or password incorrect!")
        }
    }
    
    return (
        <div>           
            {user ? 
                ( <form className={classes.form} id="postComment_form">
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
                ):  <p>Log in to post a comment</p>
            }
        </div>
    )
}

export default CreateComment

const useStyles = makeStyles({
    form: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: '100%',
    },
});

