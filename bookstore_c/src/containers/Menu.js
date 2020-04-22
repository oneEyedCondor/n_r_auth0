import { connect } from 'react-redux';
import Menu from '../components/Menu';

const mapStateToProps = ({cart}, {history}) => ({
    totalPrice: cart.items.reduce((total, product) => total + product.price, 0),
    count: cart.items.length,
});

export default connect(mapStateToProps)(Menu);