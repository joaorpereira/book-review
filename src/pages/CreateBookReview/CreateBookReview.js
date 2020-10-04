import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import firebase from 'firebase'
import {db, storage} from '../../services/firebase'
import { goToBooksFeed } from '../../routes/Cordinator';
import MenuBookIcon from '@material-ui/icons/MenuBook';
import { makeStyles, Button, CssBaseline, TextField, Paper, Grid, Typography, LinearProgress } from '@material-ui/core';


function CreateBookReview({username}) {
    const history = useHistory();
    const classes = useStyles();

    const [form, setForm] = useState({title: '', content: '',})
    const [progress, setProgress] = useState(0)
    const [image, setImage] = useState("")

    const handleChange = (e) => {
        const { value, name } = e.target
        setForm({...form, [name] : value})
    }

    const handleImageChange = (e) => {
        if(e.target.files[0]){
            setImage(e.target.files[0])
        }
    }

    const handleFileUpload = (e) => {
        e.preventDefault()
        const uploadTask = storage.ref(`images/${image.name}`).put(image)
        uploadTask.on(
            "state_changed", 
            (snapshot) => {
                const progress = Math.round(
                    (snapshot.bytesTransferred / snapshot.totalBytes) * 100
                )
                setProgress(progress)
            },
            (error) => {
                console.log(error)
                alert(error.message)
            },
            () => {
              storage
                .ref("images")
                .child(image.name)
                .getDownloadURL()
                .then((url) => {
                    db.collection("posts").add({
                        content: form.content,
                        imageUrl: url,
                        title: form.title,
                        username: username,
                        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
                    })
                    setProgress(0)
                    setForm({title: '', content: '',})
                    setImage("")
                    goToBooksFeed(history)
                })
            }    
        )
    }

  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={12} sm={12} md={12} component={Paper} elevation={6} square>
        <div className={classes.paper}>
          <Typography variant="h5" >
          <MenuBookIcon/> Create Book Review
          </Typography>          
          <form className={classes.form} id="create_form">
            <TextField
              value={form.title}
              onChange={handleChange}
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="title"
              label="Book Title"
              autoFocus
            />
            <TextField
              value={form.content}
              onChange={handleChange}
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="content"
              label="Review"
              multiline
              rows={2}
              rowsMax={4}
            />
            <TextField
              onChange={handleImageChange}
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="image"
              label="Image file"
              type="file"    
              InputLabelProps={{shrink: true}}
            />     
            <LinearProgress 
                variant="determinate"
                value={progress}/>  
            <Button
              className={classes.submit}     
              variant="contained"
              color="primary"
              size="large"
              type="submit"
              onClick={handleFileUpload}
            >
              Create
            </Button>
          </form>
        </div>
      </Grid>
    </Grid>
  );
}

export default CreateBookReview;

// Material UI

const useStyles = makeStyles((theme) => ({
    root: {
      height: '90vh',
      width: "100%",
    },
    paper: {
      margin: theme.spacing(8, 4),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
  
    form: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection:'column',
      maxWidth: '450px',
      marginTop: theme.spacing(1),
    },
    submit: {
      width: '200px',
      margin: theme.spacing(2, 0, 2),
    },
}));
