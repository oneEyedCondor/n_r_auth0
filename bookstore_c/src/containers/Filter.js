import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as filterActions from '../store/actions/filter';
import * as categoriesActions from '../store/actions/categories';
import Filter from '../components/Filter';

const mapStateToProps = ({filter}) => ({
    filterBy: filter.filterBy,
    searchQuery: filter.searchQuery,
});

const mapDispatchToProps = dispatch => ({
    ...bindActionCreators(filterActions, dispatch),
    ...bindActionCreators(categoriesActions, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);