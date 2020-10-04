import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { SignIn, SignUp, CreateBookReview, BooksFeed, BookReview, ErrorPage} from '../pages/index'

const Router = ({user}) => {
    return (
        <Switch>
            <Route exact path={'/signin'}>
                <SignIn/>
            </Route>
            <Route exact path={'/signup'}>
                <SignUp/>
            </Route>
            <Route exact path={'/create'}>
                {user?.displayName ? <CreateBookReview username={user.displayName}/> : <h3>You need to be logged to upload images</h3>}
            </Route>
            <Route exact path={['/books', '/']}>
                <BooksFeed/>
            </Route>
            <Route exact path={'/books/:id'}>
                <BookReview />
            </Route>
            <Route>
                <ErrorPage/>
            </Route>
        
        </Switch>
    )
}

export default Router;
