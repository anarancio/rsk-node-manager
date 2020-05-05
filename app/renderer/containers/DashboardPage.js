import { connect } from 'react-redux';
import { push } from 'connected-react-router';
import { bindActionCreators } from 'redux';
import Dashboard from '../components/Dashboard'
import navigationActions from '../actions/navigation';

const mapStateToProps = (state) => {
  return state;
};

const mapDispatchToProps = (dispatch) => {
    
    return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
