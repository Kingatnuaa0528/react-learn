import React from 'react';
import { createStore, bindActionCreators,combineReducers } from 'redux'
import { Provider, connect } from 'react-redux'

import { countReducer } from './reducer';
import UIComponent from './ui';
import { plusActionCreator, minusActionCreator } from './action';

let reducers = combineReducers({
    count: countReducer
})
var store = createStore(reducers);

const CollectionComponent = connect(
    (state)=> {
        return {
            count: state.count.count
        }
    },
    (dispatch)=> {
        return {
            onPlusClick: bindActionCreators(plusActionCreator, dispatch),
            onMinusClick: bindActionCreators(minusActionCreator, dispatch)
        }
    }
)(UIComponent);

class ReduxTestComponent extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <CollectionComponent />
            </Provider>
        );
    }
}

export default ReduxTestComponent;