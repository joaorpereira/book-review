import React from 'react';
import { useHistory } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import {AppBar, Toolbar, Button, Typography } from '@material-ui/core';
import { goToBooksFeed, goToSignin, goToSignUp } from '../../routes/Cordinator';
import bookReviewLogo from '../../images/logo2.png'
import { auth } from '../../services/firebase';

function ButtonAppBar({user}) {

  const classes = useStyles();
  const history = useHistory();

  const logout = () => {

    auth.signOut()
    goToSignin(history)
  }

  return (
    <AppBar className={classes.root} position="sticky">
        <Toolbar>
            <Button className={classes.logo} onClick={() => goToBooksFeed(history)}>
                <img className={classes.image} src={bookReviewLogo} alt="Book Review Logo"/>
                <Typography className={classes.text}>Book Reviews</Typography>            
            </Button>
        </Toolbar>
        <Toolbar>
            { user ? (
                 <Button color={'inherit'} onClick={() => null}>
                    <Typography className={classes.buttonText} onClick={logout}>Logout</Typography>    
                 </Button> ) : 
            (<> 
                <Button className={classes.button} color={'secondary'} variant={'outlined'} size ={'small'} onClick={() => null}>
                    <Typography className={classes.buttonText} onClick={() => goToSignin(history)}>Sign In</Typography>    
                </Button>
                <Button color={'secondary'} variant={'outlined'} size ={'small'} onClick={() => null}>
                    <Typography className={classes.buttonText} onClick={() => goToSignUp(history)}>Sign Up</Typography>    
                </Button> 
            </>)}
        </Toolbar>  
    </AppBar>
  );
}

export default ButtonAppBar

const useStyles = makeStyles({
    root: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        width: "100%",
        height: "10vh",
    },
    logo: {
        color: 'inherit',
    },
    button: {
        margin: '20px',
    },
    buttonText: {
        fontSize: '15px',
        letterSpacing: '3px',
        textTransform:'capitalize',
        "@media(max-width: 800px)" : {
            letterSpacing: '1px',
        }  
    },
    image: {
        height: "50px",
        marginRight: '10px',       
    },
    text: {  
        textColor:'secondary',
        letterSpacing: '1px',
        fontSize: '20px',
        marginLeft: '10px',
        textTransform:'capitalize',
        "@media(max-width: 800px)" : {
            visibility: 'hidden',
        }  
    },

});