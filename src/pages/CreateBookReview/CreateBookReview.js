import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { goToBooksFeed } from '../../routes/Cordinator';
import { makeStyles } from '@material-ui/core/styles';
import MenuBookIcon from '@material-ui/icons/MenuBook';
import { Button, CssBaseline, TextField, Paper, Grid, Typography, LinearProgress } from '@material-ui/core';

function CreateBookReview() {
  
    const history = useHistory();
    const classes = useStyles();

    const [form, setForm] = useState({title: ''})
    const [progress, setProgress] = useState(0)
    const [image, setImage] = useState("")

    const handleImageChange = (e) => {
        if(e.target.files[0]){
            setImage(e.target.files[0])
        }
    }

    const handleChange = (e) => {
        const { value, name } = e.target
        setForm({...form, [name] : value})
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
              value={image}
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
                margin="normal"
                fullWidth
                variant="determinate"
                value={progress}/>            
            <Button
              className={classes.submit}
              type="submit"
              variant="contained"
              color="primary"
              size="large"
            //   onClick={handleUpload}
            >
              Submit
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
      width: '450px',
      maxWidth: '450px',
      marginTop: theme.spacing(1),
    },
    submit: {
      width: '200px',
      margin: theme.spacing(2, 0, 2),
    },
}));
