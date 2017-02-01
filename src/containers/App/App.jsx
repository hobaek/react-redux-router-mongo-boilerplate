import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Nav from '../Nav';

const ACTION_CREATORS_NEED_TO_BE_IMPORTED = {};


const App = props =>
  <div className="appContainer">
    <Nav {...props} />
    {React.cloneElement(props.children, props)}
  </div>;

function mapStateToProps(state) {
  return {

  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(ACTION_CREATORS_NEED_TO_BE_IMPORTED, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
