import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, bindActionCreators} from 'redux';
import * as actions from './actions';
import counterReducer from './reducer';
import Counter from './counter';

const store = createStore(counterReducer);
const {dispatch} = store;
const {inc, dec, rnd} = bindActionCreators(actions, dispatch);

const update = ()=> {
    ReactDOM.render(<Counter
                    counter={store.getState()}
                    inc={inc}
                    dec={dec}
                    rnd={()=>{
                        const value = Math.floor(Math.random()*10);
                        rnd(value);
                    }} />, document.getElementById('root'));
};

update();
store.subscribe(update);