import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { SignIn, SignUp, CreateBookReview, BooksFeed, Book, ErrorPage} from '../pages/index'

const Router = ({user, posts}) => {
    return (
        <Switch>
            <Route exact path={'/signin'}>
                <SignIn/>
            </Route>
            <Route exact path={'/signup'}>
                <SignUp/>
            </Route>
            <Route exact path={'/create'}>
                {user?.displayName ? 
                    <CreateBookReview username={user.displayName}/> : 
                    <h3 style={{color: "grey", textAlign:'center'}}>Sign in to upload a book review</h3>
                }
            </Route>
            <Route exact path={['/books', '/']}>
                {user?.displayName ? 
                    <BooksFeed user={user} posts={posts} /> : 
                    <>
                        <h4 style={{color: "grey", textAlign:'center', marginBottom:'-5px'}}>Sign in to upload a book review</h4>
                        <BooksFeed user={user} posts={posts} />                    
                    </>
                }                
            </Route>
            <Route exact path={'/books/:id'}>
                <Book />
            </Route>
            <Route>
                <ErrorPage/>
            </Route>
        
        </Switch>
    )
}

export default Router;
