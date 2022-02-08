import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import promiseMiddleware from 'redux-promise';
import {fetchReducer} from './fetchData';

const middlewareEnhancer = applyMiddleware(thunkMiddleware, promiseMiddleware);
export const store = createStore(fetchReducer, middlewareEnhancer);