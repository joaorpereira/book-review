import React, { useCallback, useContext, useLayoutEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { goToSignIn } from '../../routes/Cordinator';
import { makeStyles, Button, CssBaseline, TextField, Paper, Box, Grid, Typography } from '@material-ui/core';
import Copyright from '../../components/Copyright';
import SignUpImage from '../../images/sign-up-image.jpg'
import { app } from "../../services/firebase";
import { AuthContext } from '../../services/Auth';

function SignUp() {

  const history = useHistory();
  const classes = useStyles();
  const { currentUser } = useContext(AuthContext);

  const handleSignUp = useCallback(async event => {
    event.preventDefault();
   
    const { username, email, password } = event.target.elements;    
    
    try {
      const newUser = await app
        .auth()
        .createUserWithEmailAndPassword(email.value, password.value);
        await newUser.user.updateProfile({displayName: username.value});
      history.push("/books");
    } catch (error) {
      alert(error);
    }
  }, [history]);

  useLayoutEffect(() => {
    if(!!currentUser){
      history.push('/books')
    }
  },[history, currentUser])

  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={false} sm={4} md={7} className={classes.image} />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <Box className={classes.paper}>
          <Typography variant="h5">
            Sign Up
          </Typography>
          <form className={classes.form} id="signUp_form" onSubmit={handleSignUp}>
            <TextField variant="outlined" margin="normal" required fullWidth label="Name" name="username" type="text" autoFocus/>
            <TextField variant="outlined" margin="normal" required fullWidth label="Email" name="email" type="email"/>
            <TextField variant="outlined" margin="normal" required fullWidth label="Password" name="password" type="password"/>
            <Button type="submit" fullWidth variant="contained" color="primary" className={classes.submit}>
              Sign Up
            </Button>
            <Grid container>
              <Grid item>
                <Button variant="text" color="secondary" onClick={() => goToSignIn(history)}>
                  Do you have an account? Sign In
                </Button>
              </Grid>
            </Grid>
            <Box mt={5}>
              <Copyright />
            </Box>
          </form>
        </Box>
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
      backgroundImage: `url(${SignUpImage})`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: '90%',
      backgroundPosition: 'center',
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