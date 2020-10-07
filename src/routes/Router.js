import React from 'react';
import { Route, Switch } from 'react-router-dom';
import PrivateRoute from '../services/PrivateRoute';
import { SignIn, SignUp, CreateBookReview, BooksFeed, Book, ErrorPage} from '../pages/index'

const Router = ({posts}) => {
    return (
        <Switch>
            <Route exact path={'/signin'}>
                <SignIn/>
            </Route>
            <Route exact path={'/signup'}>
                <SignUp/>
            </Route>
            <PrivateRoute exact path={'/create'}>
                <CreateBookReview/>
            </PrivateRoute>
            <Route exact path={['/books', '/']}>
                <BooksFeed posts={posts}/>                     
            </Route>
            <PrivateRoute exact path={'/books/:bookId'}>                
                <Book />
            </PrivateRoute>
            <Route>
                <ErrorPage/>
            </Route>        
        </Switch>
    )
}

export default Router;
