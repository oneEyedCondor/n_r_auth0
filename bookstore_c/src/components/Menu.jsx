import React from 'react';
import {Link, withRouter} from 'react-router-dom';
import styled from 'styled-components';
import auth0Client from '../Auth';

const Styles = styled.div`
    height: ${props => props.height};
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid #a9a9a9;
    
    .logo {
        padding: 0 10px;
    }

    .blc-cart-info {
        width: 260px;
        height: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;

        p {
            font-size: 14px;
            font-weight: bold;
            color: #a9a9a9;
        }

        .link-to-cart {
            height: 100%;
            padding: 0 10px;
            line-height: ${props => props.height};
            text-transform: uppercase;
            text-decoration: none;
            color: #fff;
            background-color: #a9a9a9;
            border: 1px solid transparent;
            :hover {
                opacity: 0.9;
            }
        }
    }
`;

const Menu = ({history, totalPrice, count}) => {
    const signOut = () => {
        auth0Client.signOut();
        history.replace('/');
    };

    return (
        <Styles height={'45px'}>
            <Link to="/">
                <h1 className="logo">Store</h1>
            </Link>
            <div className="blc-cart-info">
                {
                    !auth0Client.isAuthenticated() &&
                    <button onClick={auth0Client.signIn}>Sign In</button>
                }
                {
                    auth0Client.isAuthenticated() &&
                    <div>
                        <span>{auth0Client.getProfile().name}</span>
                        <button onClick={()=>signOut()}>Sign Out</button>
                    </div>
                }
                <p>Total price: {totalPrice} грн.</p>
                <Link to="/cart" className="link-to-cart">Cart ({count})</Link>
            </div>
        </Styles>
    );
};

export default withRouter(Menu);
