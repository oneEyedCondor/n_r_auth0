import React, { Component } from 'react';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';

import auth0Client from './Auth';

import MainPage from './containers/MainPage';
import Cart from './containers/Cart';
import Callback from './Callback';
import SecuredRoute from './containers/SecuredRoute';
import FormCreate from './components/FormCreate';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = { checkingSession: true }
    }

    async componentDidMount() {
        if (this.props.location.pathname === '/callback') {
            this.setState({ checkingSession: false });
            return;
        }
        try {
            await auth0Client.silentAuth();
            this.forceUpdate();
        } catch (err) {
            if (err.error !== 'login_required') console.log(err.error);
        }
        this.setState({ checkingSession: false });
    }

    render() {
        return (
            <Switch>
                <Route exact path='/' component={MainPage}/>
                <Route exact path='/cart' component={Cart}/>
                <Route exact path='/callback' component={Callback}/>
                <SecuredRoute 
                    path='/form-create'
                    component={FormCreate}
                    checkingSession={this.state.checkingSession} />
                <Redirect to='/' />
            </Switch>
        );
    }
}

export default withRouter(App);
