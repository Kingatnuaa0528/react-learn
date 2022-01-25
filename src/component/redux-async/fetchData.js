import { FETCHING, FETCH_SUCCESS, FETCH_FAIL } from './action';

const initialState = {
    introduce: "",
    data: [],
    dataStatus: FETCHING
};

export default function fetchReducer(state = initialState, action) {
    switch(action.type) {
        case FETCHING: {
            return {
                introduce: "数据获取中",
                data: state.data,
                dataStatus: FETCHING
            }
        }
        case FETCH_FAIL: {
            return {
                introduce: "数据获取失败",
                data: state.data,
                dataStatus: FETCH_FAIL
            }
        }
        case FETCH_SUCCESS: {
            return {
                introduce: "数据获取成功",
                data: action.payload,
                dataStatus: FETCH_SUCCESS
            }
        }
        default: {
            return state;
        }
    }
}

export async function fetchData(dispatch, getState) {
    console.log("In fetchData! ");
    dispatch({ type: FETCHING });
    await new Promise((resolve, reject) => {
        /* 模拟异步操作成功，这样可以通过fetch调接口获取数据 */
        setTimeout(() => {
            dispatch({ type: FETCH_SUCCESS, payload: "Hello React!" });
        }, 1000);
      });
}