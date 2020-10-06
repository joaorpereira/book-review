import React from 'react';
import { useHistory } from 'react-router-dom';
import { makeStyles, AppBar, Toolbar, Button, Typography } from '@material-ui/core';
import { goToBooksFeed, goToSignIn, goToSignUp, goToCreateBookReview } from '../../routes/Cordinator';
import bookReviewLogo from '../../images/logo2.png'
import { auth } from '../../services/firebase';
import Buttons from './Buttons/Buttons';

function ButtonAppBar({user}) {

  const classes = useStyles();
  const history = useHistory();

  const logout = () => {
    auth.signOut()
    goToSignIn(history)
  }

  return (
    <AppBar className={classes.root} position="sticky">
        <Toolbar >
            <Button className={classes.logo} onClick={() => goToBooksFeed(history)}>
                <img className={classes.image} src={bookReviewLogo} alt="Book Review Logo"/>
                <Typography className={classes.text}>Book Reviews</Typography>            
            </Button>
        </Toolbar>
        <Toolbar >
            { user ? (
                <>
                    <Buttons text={"Feed"} page={goToBooksFeed}/>
                    <Buttons text={"Create"} page={goToCreateBookReview}/>
                    <Button className={classes.button} color={'secondary'} onClick={logout} variant={'contained'} size ={'small'}>
                        <Typography className={classes.buttonText}>Logout</Typography>    
                    </Button> 
                </>                 
            ) :            
            (<> 
                <Buttons text={"Sign In"} page={goToSignIn} color={'secondary'} variant={'outlined'} size ={'small'} />
                <Buttons text={"Sign Up"} page={goToSignUp} color={'secondary'} variant={'outlined'} size ={'small'} />
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
        color: 'white',        
    },
    button: {
        marginLeft: '10px',
        "@media(max-width: 800px)" : {
            marginLeft: '0px',
        } 
    },
    buttonText: {
        fontSize: '16px',
        letterSpacing: '3px',
        color: 'white',
        textTransform:'capitalize',
        "@media(max-width: 800px)" : {
            letterSpacing: '1px',
            margin: '0px',
        }  
    },
    image: {
        height: "50px",
        marginRight: '10px',       
        "@media(max-width: 800px)" : {            
            margin: "0 auto",
        } 
    },
    text: {  
        textColor:'secondary',
        letterSpacing: '1px',
        fontSize: '20px',
        marginLeft: '10px',
        textTransform:'capitalize',
        "@media(max-width: 800px)" : {
            marginLeft: '0px',
            display: 'none'
        }                     
    },
});