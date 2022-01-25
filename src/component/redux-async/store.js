import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import fetchReducer from './fetchData';

const middlewareEnhancer = applyMiddleware(thunkMiddleware);
export const store = createStore(fetchReducer, middlewareEnhancer);