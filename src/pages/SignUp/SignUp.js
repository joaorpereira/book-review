import React from 'react';
import { useHistory } from 'react-router-dom';
import { goToBooksFeed, goToSignin } from '../../routes/Cordinator';
import { makeStyles } from '@material-ui/core/styles';
import { Button, CssBaseline, TextField, Paper, Box, Grid, Typography } from '@material-ui/core';
import Copyright from '../../components/Copyright';
import SignInImage from '../../images/sign-in-image.jpg'

function SignUp() {
  
  const history = useHistory();
  const classes = useStyles();

  // const [form, setForm] = useState({username: '', email: '', password: ''})

  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={false} sm={4} md={7} className={classes.image} />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <div className={classes.paper}>
          <Typography variant="h5">
            Sign Up
          </Typography>
          <form className={classes.form} noValidate>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="username"
              label="Name"
              name="username"
              autoComplete="username"
              autoFocus
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email"
              name="email"
              autoComplete="email"
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              onClick={() => goToBooksFeed(history)}
            >
              Sign Up
            </Button>
            <Grid container>
              <Grid item>
                <Button                    
                    variant="text"
                    color="secondary" 
                    onClick={() => goToSignin(history)}
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