import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as productsActions from '../store/actions/products';
import * as categoriesActions from '../store/actions/categories';
import MainPage from '../components/MainPage';
import orderBy from 'lodash/orderBy';

const sortBy = (products, filterBy) => {
    switch (filterBy) {
        case 'price high':
            return orderBy(products, 'price', 'desc');
        case 'price low':
            return orderBy(products, 'price', 'asc');
        case 'author':
            return orderBy(products, 'author', 'asc');
        case 'category':
            return products.filter(p => {
                return  p.categoryId === JSON.parse(sessionStorage.getItem('selected_category'));
            }
               
            );
        default:
            return products;
    }
};

const filterProducts = (products, searchQuery) => products.filter( product => {
    return (
        product.title.toLowerCase().indexOf(searchQuery.toLowerCase()) >= 0 ||
        product.author.toLowerCase().indexOf(searchQuery.toLowerCase()) >= 0
    );
});

const searchProducts = (products, filterBy, searchQuery) => {
    return sortBy(filterProducts(products, searchQuery), filterBy);
};

const mapStateToProps = ({products, filter}) => ({
    products: products.items && searchProducts(products.items, filter.filterBy, filter.searchQuery),
    isReady: products.isReady,
});

const mapDispatchToProps = dispatch => ({
    ...bindActionCreators(productsActions, dispatch),
    ...bindActionCreators(categoriesActions, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(MainPage);