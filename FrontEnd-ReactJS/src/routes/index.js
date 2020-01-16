import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import Dashboard from '~/pages/Dashboard';

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Dashboard} />
                <Redirect path="*" to="/" />
            </Switch>
        </BrowserRouter>
    );
}
