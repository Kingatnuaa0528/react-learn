export const FETCHING = "fetching";
export const FETCH_SUCCESS = "fetch success";
export const FETCH_FAIL = "fetch failed";

const initialState = {
    introduce: "",
    data: [],
    dataStatus: FETCHING
};

export function fetchReducer(state = initialState, action) {
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

export function fetchData(dispatch) {
    dispatch({ type: FETCHING });
    return new Promise((resolve, reject) => {
        /* 模拟异步操作成功，这样可以通过fetch调接口获取数据 */
        var randomNumber = Math.random() * 2;
        setTimeout(() => {
            if(randomNumber <= 2) {
                dispatch({ type: FETCH_SUCCESS, payload: "You win! Number is less than 1!" });
                resolve("number is less than 1!");
            } else {
                dispatch({ type: FETCH_SUCCESS, payload: "You lose! Number is more than 1!" });
                reject("number is more than 1!")
            }
        }, 1000);
      });
}