import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { goToBooksFeed, goToSignUp } from '../../routes/Cordinator';
import { makeStyles } from '@material-ui/core/styles';
import { Button, CssBaseline, TextField, Paper, Box, Grid, Typography } from '@material-ui/core';
import Copyright from '../../components/Copyright';
import SignInImage from '../../images/sign-in-image.jpg'
import { auth } from '../../services/firebase';

function SignIn() {
  
  const history = useHistory();
  const classes = useStyles();

  const [form, setForm] = useState({email: '', password: ''})

  const handleChange = (e) => {
    const { value, name } = e.target
    setForm({...form, [name] : value})
  }

  const signIn = (e) => {
    e.preventDefault()

    const element = document.getElementById("signIn_form")
    const validation = element.checkValidity()
    element.reportValidity()

    if(validation){
      auth
      .signInWithEmailAndPassword(form.email, form.password)
      .catch((err) => {
        return alert(err.message)
      })      
      goToBooksFeed(history)

    } else{
      alert("User or password incorrect!")
    }
  } 

  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={false} sm={4} md={7} className={classes.image} />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <div className={classes.paper}>
          <Typography variant="h5">
            Sign In
          </Typography>
          <form className={classes.form} id="signIn_form">
            <TextField
              value={form.email}
              onChange={handleChange}
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="email"
              label="Email"
              autoFocus
            />
            <TextField
              value={form.password}
              onChange={handleChange}
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              onClick={signIn}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item>
                <Button                    
                    variant="text"
                    color="secondary" 
                    onClick={() => goToSignUp(history)}
                    >
                Don't have an account? Sign Up
                </Button>
              </Grid>
            </Grid>
            <Box mt={5}>
              <Copyright />
            </Box>
          </form>
        </div>
      </Grid>
    </Grid>
  );
}

export default SignIn;

// Material UI

const useStyles = makeStyles((theme) => ({
    root: {
      height: '90vh',
      width: "100%",
    },
    image: {
      backgroundImage: `url(${SignInImage})`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      backgroundPosition: 'right bottom',
    },
    paper: {
      margin: theme.spacing(8, 4),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
  
    form: {
      width: '100%',
      marginTop: theme.spacing(1),
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
    },
  }));