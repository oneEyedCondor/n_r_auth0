import React from 'react';
import { Route } from 'react-router-dom';
import auth0Client from '../Auth';

const SecuredRoute = ({ component: Component, path, checkingSession }) => {
    const routeRender = () => {
        if (checkingSession) return <h3>Validating session...</h3>;
        if (!auth0Client.isAuthenticated()) {
            auth0Client.signIn();
            return <div></div>;
        }
        return <Component />;
    };

    return <Route exact path={path} render={() => routeRender()}/>;
}

export default SecuredRoute;
