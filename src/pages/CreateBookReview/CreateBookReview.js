import React, { useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
import firebase from 'firebase'
import { AuthContext } from '../../services/Auth';
import {db, storage} from '../../services/firebase'
import MenuBookIcon from '@material-ui/icons/MenuBook';
import { goToBooksFeed } from '../../routes/Cordinator';
import { makeStyles, Button, CssBaseline, TextField, Paper, Grid, Typography, LinearProgress } from '@material-ui/core';

function CreateBookReview() {

  const history = useHistory();
  const classes = useStyles();
  const { currentUser } = useContext(AuthContext);

  const [form, setForm] = useState({title: '', content: '', synopsis: ''})
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
                  username: currentUser.displayName,
                  synopsis: form.synopsis,
                  timestamp: firebase.firestore.FieldValue.serverTimestamp(),
              })
              setProgress(0)
              setForm({title: '', content: '', synopsis: '',})
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
            <TextField variant="outlined" margin="normal" required fullWidth
              value={form.title}
              onChange={handleChange}              
              name="title"
              label="Book Title"
              autoFocus
              size='small'
            />
              <TextField variant="outlined" margin="normal" required fullWidth multiline
                value={form.synopsis}
                onChange={handleChange}                
                name="synopsis"
                label="Synopsis"
                rows={1}
                rowsMax={6}
              />
            <TextField variant="outlined" margin="normal" required fullWidth multiline
              value={form.content}
              onChange={handleChange}              
              name="content"
              label="Review"            
              rows={1}
              rowsMax={4}
            />
            <TextField variant="outlined" margin="normal" required fullWidth 
              onChange={handleImageChange}
              name="image"
              label="Image file"
              type="file"    
              size="small"
              InputLabelProps={{shrink: true}}
            />     
            <LinearProgress 
                variant="determinate"
                value={progress}
                style={{width: "100%", marginTop: "20px", marginBottom: "20px"}}/>  
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
      width: '400px',
      "@media(max-width: 800px)" : {
        width: '90%',
      },     
    },
    submit: {
      width: '200px',
      margin: theme.spacing(2, 0, 2),
    },
}));
