import React, { Component } from 'react';
// import React, { useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import auth0Client from './Auth';

class Callback extends Component {
    async componentDidMount() {
        await auth0Client.handleAuthentication();
        this.props.history.replace('/');
    }

    render() {
        return (
            <p>Loading profile...</p>
        );
    }
}

// const Callback = (props) => {
//     useEffect(async ()=> {
//         await auth0Client.handleAuthentication();
//         props.history.replace('/');
//     }, []);

//     return <p>Loading profile...</p>;
// };

export default withRouter(Callback);
