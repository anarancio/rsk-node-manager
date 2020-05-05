import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import navigationActions from '../../actions/navigation';
import { push } from 'connected-react-router';

class TopMenu extends Component {

    handleRskjNodes = () => {
        console.log("RSKj NODES")
        this.props.goToRskjNodes({});
    };

    handleLuminojNodes = () => {
        console.log("Lumino NODES")
    };

    render() {
        return (
        <div>
            <button onClick={this.handleRskjNodes}>RSKj Nodes</button>
            <button onClick={this.handleLuminojNodes}>Lumino Nodes</button>
        </div>
        );
    }
}

const mapStateToProps = (state) => {
    return state;
};

const mapDispatchToProps = (dispatch) => {
    const navigation = bindActionCreators(navigationActions, dispatch);
    return {
        goToRskjNodes: (data) => {
            navigation.goToRskjNodes(data);
            dispatch(push('/rskjHome'));
        },
      };
};

export default connect(mapStateToProps, mapDispatchToProps)(TopMenu);