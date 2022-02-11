import React from 'react';
import { Provider, connect } from 'react-redux'

import UIComponent from './ui';
import { fetchData } from './fetchData';
import {store} from './store';

const CollectionComponent = connect(
    (state)=> {
        return {
            data: state.data,
            type: state.dataStatus
        }
    },
    (dispatch) => {
        return {
            fetchData: () => {
                dispatch(fetchData)
            }
        }
    }
)(UIComponent);

class ReduxAsyncComponent extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <CollectionComponent/>
            </Provider>
        );
    }
}

export default ReduxAsyncComponent;