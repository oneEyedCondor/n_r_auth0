import React from 'react';
import styled from 'styled-components';

const Styles = styled.div`
    width: 170px;
    margin: 10px;
    font-size: 14px;
    color: #a9a9a9;
    border-radius: 3px;
    box-sizing: border-box;
    overflow: hidden;
    position: relative;
    
    img {
        display: block;
        margin: 0 auto;
        height: 260px;
    }

    p {
        margin-top: 10px; 
        padding: 0 15px;
    }

    .title {
        color: #000;
    }

    .author {
    }

    .price {
        margin-bottom: 40px;
        font-size: 12px;
    }

    button {
        width: 100%;
        height: 35px;
        position: absolute;
        bottom: 0;
        font-weight: 600;
        text-transform: uppercase;
        color: #fff;
        background-color: #58c558;
        border: 1px solid #58c558;
        border-radius: 0 0 3px 3px;
        transition: .3s;
        outline: none;
        :hover {
            opacity: 0.9;
            border: 1px solid transparent;
            transition: .3s;
        }
        :active {
            background-color: #01ad6e;
        }
    }
`;

const ProductCard = ({product, addToCart, productCount}) => {
    return (
        <Styles>
            <img src={product.image} alt="product"/>
            <p className="title">
                <strong>{product.title}</strong>
            </p>
            <p className="author">{product.author}</p>
            <p className="price">{product.price} грн.</p>
            <button onClick={() => addToCart(product)}>Add to cart {productCount > 0 && `(${productCount})`}</button>
        </Styles>
    );
};

export default ProductCard;
