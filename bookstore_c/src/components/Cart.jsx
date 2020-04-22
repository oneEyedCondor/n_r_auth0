import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Styles = styled.div`
    display: flex;
    flex-direction: column;

    th, td {
        border: 1px solid black;
    }

    button {
        padding: 4px 10px;
        margin: 10px;
    }

    img {
        width: 20px;
    }
`;

const Cart = ({products, totalPrice, addToCart, deleteFromCart, decreaseCountProduct, removeFromCart}) => {
    return (
        <Styles>
            <Link to="/" >Back</Link>

            {!products.length
            ? 'в корзине нет товаров...'
            : <table>
                <thead>
                    <tr>
                        <th>Название продукта</th>
                        <th>кол-во продукта</th>
                        <th>цена за 1шт.</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>{products.map(product => (
                    <tr key={product.id}>
                        <td>
                            <p>{product.title}</p>
                            <p>{product.author}</p>
                            <img src={product.image} alt="product"/>
                        </td>
                        <td>{product.count}</td>
                        <td>{product.price}</td>
                        <td>
                            <button onClick={()=>addToCart(product)}>+</button>
                            <button onClick={()=>deleteFromCart(product)}>-</button>
                            <button onClick={()=>removeFromCart(product.id)}>Delete</button>
                        </td>
                    </tr>))}
                </tbody>
                <tfoot>
                    <tr>
                        <th colSpan="4">Oбщая сумма заказа: {totalPrice} грн.</th>
                    </tr>
                </tfoot>
            </table>}

        </Styles>
    );
};

export default Cart;
