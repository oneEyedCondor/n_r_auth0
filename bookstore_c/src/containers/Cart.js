import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as cartActions from '../store/actions/cart';
import Cart from '../components/Cart';
import uniqBy from 'lodash/uniqBy';

const countDuplicate = (arr) => {
    let products = [];
    for(let i = 0; i < arr.length; i++) {
        products.push({...arr[i], count: 0});
        for(let j = i; j < arr.length; j++) {
            if (arr[i].id === arr[j].id) {
                products[i].count++;
            }
        }
    }
    return uniqBy(products, o => o.id);
};

const mapStateToProps = ({cart}) =>  {
    return ({
        products: countDuplicate(cart.items),
        totalPrice: cart.items && cart.items.reduce((count, product) => count + product.price, 0),
    });
}

const mapDispatchToProps = dispatch => ({
    ...bindActionCreators(cartActions, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Cart);