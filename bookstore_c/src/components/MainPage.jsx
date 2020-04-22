import React, { useEffect } from 'react';

import Menu from '../containers/Menu';
import Filter from '../containers/Filter';
import ProductCard from '../containers/ProductCard';
import Categories from '../containers/Categories';

const MainPage = ({products, isReady, setProducts, setCategories}) => {
    useEffect(()=> {
        fetch('http://localhost:8085/api/categories')
            .then(response => response.json())
            .then(categories => setCategories(categories));
        fetch('http://localhost:8085/api/books') // fetch('/assets/products.json')
            .then(response => response.json())
            .then(products => setTimeout(()=>setProducts(products), 200));
    }, []);

    return (
        <div className="wrap">
            <Menu />
            <Filter />
            <div className="content">
                <Categories />
                <div className="products">
                    {!isReady 
                        ? 'Loading...'
                        : products.map((product, i) => <ProductCard key={i} product={product} />)}
                </div>
            </div>
        </div>
    );
};

export default MainPage;