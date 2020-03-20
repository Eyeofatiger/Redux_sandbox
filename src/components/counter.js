import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

const Counter = ({counter, inc, dec, rnd})=> {
    return(
    <div className="jumbotron w-50 m-auto">
      <h2>Counter: <strong>{counter}</strong></h2>
      <hr />
      <button className="btn btn-primary btn-lg mr-3"
              onClick={inc}>Plus</button>
      <button className="btn btn-warning btn-lg mr-3"
              onClick={dec}>Minus</button>
      <button className="btn btn-info btn-lg"
              onClick={rnd}>Random</button>
    </div>
    );
};

const mapStateToProps = (state)=> {
        return{
                counter: state
        };
};

export default connect(mapStateToProps, actions)(Counter);