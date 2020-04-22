import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as categoriesActions from '../store/actions/categories';
import * as filterActions from '../store/actions/filter';
import Categories from '../components/Categories';

const sortCategories = (categories) => filterCategories(categories).sort((a, b) => (a.sort_order - b.sort_order));

const filterCategories = (categories) => categories.filter(c => c.status);

const mapStateToProps = ({categories}) => ({
    categories: categories.items && sortCategories(categories.items),
    selectedCategory: categories.categoryId,
});

const mapDispatchToProps = dispatch => ({
    ...bindActionCreators(categoriesActions, dispatch),
    ...bindActionCreators(filterActions, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Categories);