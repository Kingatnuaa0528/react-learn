### Redux基础知识

store
-
> - 用于存储state的一个全局对象存储
> - 一个应用有且仅有一个store

store提供了以下方法：
- getState(): 返回store中存储的state树 [参考链接](https://www.reduxjs.cn/api/store#getState);
- dispatch(action): 触发store中state变化的唯一方法 [参考链接](https://www.reduxjs.cn/api/store#dispatchaction)
  - 使用store绑定的reducer处理action，产生下一个state并存储；
  - 默认情况下，dispatch方法需要以一个对象作为入参。如果像传入函数/Promise等，则需要在createStore时引入对应的中间件增强dispatch能力；
- subscribe(listener): 添加一个state变化的监听器 [参考链接](https://www.reduxjs.cn/api/store#subscribelistener)
  - 在监听器中，可以使用getState获取state树，并根据state状态执行dispatch；
  - 注：！！！一定要仅响应部分state状态，如果对任意state状态都执行dispatch，会触发死循环！！！
- replaceReducer(nextReducer):  替换store当前绑定的reducer [参考链接](https://www.reduxjs.cn/api/store#replacereducernextreducer)；

action
-
> 从应用向store发送的命令载体 
- action的标准格式
```
{
    type: action的key,
    payload: {
        action的消息主体
    }
}
```
- action creater: 用来创建action的函数
  - 标准情况下，返回值只能为对象
  ```
  export function addTodo(text) {
    return { type: ADD_TODO, text }
  }
  ```
  - 引入thunk等中间件后，可以返回函数/Promise；
  - reduxe的异步逻辑可实现在action creater中；

reducer
-
> 响应外部dispatch(action)，执行对应的更新state逻辑代码
- combineReducer
  - 入参为一个字典，格式如下：
  ```
  {
      "reducer1": reducer1,
      "reducer2": reducer2
  }
  ```
  - combineReducer返回一个reducer，该方法常用于生成createStore的入参；
  - combineReducer后，调用store.getState()的结果变为{key: state}，即增加了一层结构，其中key为combineReducer入参的key。因此，在访问state时，需要写为states.key.xxx；
  
connect
-
> 用来将展示组件(UI组件)与store中的state和dispatch关联起来
connect写法如下：
```
connect(
    mapStateToProps(),
    mapDispatchToProps()
)(UIComponent);
```
其中，UIComponent为UI组件，而mapStateToProps和mapDipatchToProps是connect最核心两个方法：
- mapStateToProps: 
  > 用来定义从UI组件的props(属性)到store中state的映射关系
  ```
    (state)=> {
        return {
            data: state.data,
            type: state.dataStatus
        }
    }
  ```
> - 将state中的data、dataStatus两个字段映射到UI组件props的data和type属性上
> - 如果createStore前调用了combineReducer，那么此时value应该写为state.xx.data，其中xx为combineReducer的key
- mapDispatchToProps:
  > 用来定义从UI组件的props(函数)到dispatch的映射关系
  ```
    (dispatch) => {
        return {
            fetchData: () => {
                dispatch(fetchData)
            }
        }
    }
  ```
  > 其中第一个fetchData为UI组件props中的函数名，第二个fetchData为一个action creator