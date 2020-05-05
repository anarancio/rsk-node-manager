import { connect } from 'react-redux';
import { push } from 'connected-react-router';
import { bindActionCreators } from 'redux';
import RskHome from '../components/rskj/RskHome'
import navigationActions from '../actions/navigation';

const mapStateToProps = (state) => {
  return state;
};

const mapDispatchToProps = (dispatch) => {
    
    return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(RskHome);
