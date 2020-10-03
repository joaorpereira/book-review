import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { SignIn, SignUp, CreateBookReview, BooksReviewFeed, BookReview, ErrorPage} from '../screens/index'

const Router = () => {
    return (
        <Switch>
            <Route exact path={'/signin'}>
                <SignIn/>
            </Route>
            <Route exact path={'/error'}>
                <ErrorPage/>
            </Route>
            <Route exact path={'/signup'}>
                <SignUp/>
            </Route>
            <Route exact path={'/create'}>
                <CreateBookReview/>
            </Route>
            <Route>
                <BooksReviewFeed exact path={['/books', '/']}/>
            </Route>
            <Route>
                <BookReview exact path={'/books/:id'}/>
            </Route>
        
        </Switch>
    )
}

export default Router;
