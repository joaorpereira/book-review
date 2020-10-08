import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { SignIn, SignUp, CreateBookReview, BooksFeed, Book, ErrorPage} from '../pages/index'

const Router = () => {
    return (
        <Switch>
            <Route exact path={'/signin'}>
                <SignIn/>
            </Route>
            <Route exact path={'/signup'}>
                <SignUp/>
            </Route>
            <Route exact path={'/create'}>
                <CreateBookReview/>                     
            </Route>
            <Route exact path={['/books', '/']}>
                <BooksFeed/>                     
            </Route>
            <Route exact path={'/books/:bookId'}>                
                <Book />
            </Route>
            <Route>
                <ErrorPage/>
            </Route>        
        </Switch>
    )
}

export default Router;
