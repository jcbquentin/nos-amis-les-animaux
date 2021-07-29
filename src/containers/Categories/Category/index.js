import { connect } from 'react-redux';

import Category from 'src/components/Categories/Category';
import { fetchCategoryFromApi } from '../../../actions/api';

const mapStateToProps = (state, ownProps) => ({
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  fetchCategory: function () {
    dispatch(fetchCategoryFromApi(ownProps.match.params.id))
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Category);