import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { SignIn, SignUp, CreateBookReview, BooksFeed, Book, ErrorPage} from '../pages/index'

const Router = () => {
    return (
        <Switch>
            <Route exact path={['/signin', '/']} component={SignIn}/>
            <Route exact path={'/signup'} component={SignUp}/>
            <Route exact path={'/create'} component={CreateBookReview}/>
            <Route exact path={'/books'} component={BooksFeed}/>                
            <Route exact path={'/books/:id'} component={Book}/>                
            <Route component={ErrorPage}/>       
        </Switch>
    )
}

export default Router;
