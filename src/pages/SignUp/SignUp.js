import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { goToBooksFeed, goToSignIn } from '../../routes/Cordinator';
import { makeStyles, Button, CssBaseline, TextField, Paper, Box, Grid, Typography } from '@material-ui/core';
import Copyright from '../../components/Copyright';
import SignInImage from '../../images/sign-in-image.jpg'
import { auth } from '../../services/firebase';

function SignUp() {
  
  const history = useHistory();
  const classes = useStyles();

  const [form, setForm] = useState({username: '', email: '', password: ''})

  const handleSignOutForm = (e) => {
    const { value, name } = e.target
    setForm({...form, [name] : value})
  }

  const createNewUser = (e) => {
    e.preventDefault()

    const element = document.getElementById("signUp_form")
    const validation = element.checkValidity()
    element.reportValidity()
    
    if(validation){
      auth
      .createUserWithEmailAndPassword(form.email, form.password)
      .then((authUser) => {
        return authUser.user.updateProfile({displayName : form.username})
      })
      .catch((err) => {
        return alert(err.message)
      })
      
      goToBooksFeed(history)

    } else{
      alert("Usuário ou senha incorretos!")
    }
  }

  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={false} sm={4} md={7} className={classes.image} />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <div className={classes.paper}>
          <Typography variant="h5">
            Sign Up
          </Typography>
          <form className={classes.form} id="signUp_form">
            <TextField
              onChange={handleSignOutForm}
              variant="outlined"
              margin="normal"
              required
              fullWidth
              label="Name"
              name="username"
              autoComplete="username"
              autoFocus
            />
            <TextField
              onChange={handleSignOutForm}
              variant="outlined"
              margin="normal"
              required
              fullWidth
              label="Email"
              name="email"
              autoComplete="email"
            />
            <TextField
              onChange={handleSignOutForm}
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
              onChange={handleSignOutForm}
              variant="contained"
              color="primary"
              className={classes.submit}
              onClick={createNewUser}
            >
              Sign Up
            </Button>
            <Grid container>
              <Grid item>
                <Button             
                    variant="text"
                    color="secondary" 
                    onClick={() => goToSignIn(history)}
                    >
                Do you have an account? Sign In
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

export default SignUp

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
      backgroundPosition: 'right center',
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