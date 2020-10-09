import React, { useContext } from 'react'
import { Grid, makeStyles, Button } from '@material-ui/core'
import useAuthPage from '../../hooks/useAuthPage';
import { PostContext } from '../../services/Post';
import { useParams } from 'react-router-dom';
import BookInfo from '../../components/BookInfo/BookInfo';
import { goToBooksFeed } from '../../routes/Cordinator'
import { useHistory } from 'react-router-dom';

function BooksReviewFeed() {
    useAuthPage()

    const history = useHistory();

    let {id} = useParams()
    const classes = useStyles()
    const { posts } = useContext(PostContext);

    return (
        <Grid className={classes.root}container justify="center">
            {posts
                .filter(item => {return item.id === id })
                .map(item => (
                    <BookInfo key={item.id} item={item}/>
                ))
            }
            <Button variant="text" color="secondary" onClick={() => goToBooksFeed(history)}>
                Return to feed page
            </Button>
        </Grid>
    )
}

export default BooksReviewFeed

const useStyles = makeStyles({
    root: {
        height: '100%', 
        maxWidth: '100%', 
        marginTop:'100px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection:'column',
        "@media(max-width: 800px)" : {
            marginTop:'20px',
        }  
    },
    card: {
        display:'flex',
        justifyContent: 'center',
        alignItems:'center',
        width: 700,
        height: 350,
        "@media(max-width: 800px)" : {
          flexDirection: 'column',
          alignItems:'center',
          width: 250,
          height: 475,
          padding: '20px',
        }  
    },
    image: {
        display: 'flex',
        alignItems: 'center',
        height: 400,
        width: 350,
        margin: '0px 30px 0px 30px',

        "@media(max-width: 800px)" : {
            display: 'flex',
            alignItems: 'center',
            height: 100,
            width: 150,
            margin: '0px'
        }
    },
    content: {
        transform: 'translate(0%,-65%)',
        "@media(max-width: 800px)" : {
            transform: 'translate(0%,40%)',
        }
    }
});
