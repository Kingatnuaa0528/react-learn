import configureMockStore from 'redux-mock-store'
import thunkMiddleware from 'redux-thunk';
import promiseMiddleware from 'redux-promise';

import { fetchData, fetchReducer } from "../../component/redux-async/fetchData";
import { FETCHING, FETCH_SUCCESS, FETCH_FAIL } from '../../component/redux-async/action';
//import {store} from '../../component/redux-async/store';

const middleWares = [thunkMiddleware, promiseMiddleware];
const mockStore = configureMockStore(middleWares);

describe('redux-async reducer test', () => {
    it('default state', () => {
        expect(fetchReducer(undefined, {})).toEqual(
            {
                introduce: "",
                data: [],
                dataStatus: FETCHING
            }
        )
    })

    it('FETCHING state', () => {
        expect(fetchReducer({
            data: ["Hello World!"]
        }, {
            type: FETCHING
        })).toEqual(
            {
                introduce: "数据获取中",
                data: ["Hello World!"],
                dataStatus: FETCHING
            }
        )
    })

    it('FETCH_FAIL state', () => {
        expect(fetchReducer({
            data: ["Hello World!"]
        }, {
            type: FETCH_FAIL
        })).toEqual(
            {
                introduce: "数据获取失败",
                data: ["Hello World!"],
                dataStatus: FETCH_FAIL
            }
        )
    })

    it('FETCH_SUCCESS state', () => {
        expect(fetchReducer({}, {
            type: FETCH_SUCCESS,
            payload: {"text": "Hello World!"}
        })).toEqual(
            {
                introduce: "数据获取成功",
                data: {"text": "Hello World!"},
                dataStatus: FETCH_SUCCESS
            }
        )
    })

    it('Async Redux testCase', () => {
        const initialState = {};
        const store = mockStore(initialState);

        const expectAction = [{"type": "fetching"}, {"payload": "You win! Number is less than 1!", "type": "fetch success"}];
        return store.dispatch(fetchData).then(() => {
            expect(store.getActions()).toEqual(expectAction)
        })
    })
})