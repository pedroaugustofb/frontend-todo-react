import React from 'react'
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import './template/custom.css'

import Menu from './template/menu'
import Todo from './todo/todo';

const RedirectRouter = ({ component:  Component, ...rest }) => (
    <Route
        {...rest}
        render={(props) => {
        return props.location.pathname !== "/" ? (
            <Component {...props} />
        ) : (
            <Redirect
            to={{ pathname: "/todos", state: { from: props.location } }}
            />
        );
        }}
    />
);

const App = () => {
return (
    <BrowserRouter>
        <Menu />
        <Switch>
            <RedirectRouter exact path={["/todos", "/"]} component={Todo}/>
        </Switch>
    </BrowserRouter>
);
};

export default App;
