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
    }
)(UIComponent);

class ReduxAsyncComponent extends React.Component {
    handleClick() {
        store.dispatch(fetchData);
    }
    render() {
        return (
            <Provider store={store}>
                <CollectionComponent fetchData={this.handleClick}/>
            </Provider>
        );
    }
}

export default ReduxAsyncComponent;