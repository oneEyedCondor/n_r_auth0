import { combineReducers } from 'redux';
import products from './products';
import cart from './cart';
import filter from './filter';
import categories from './categories';

export default combineReducers({
    products,
    cart,
    filter,
    categories
});