import React from 'react';
import './test.css';
import { FETCHING, FETCH_SUCCESS, FETCH_FAIL } from './action'

class UIComponent extends React.Component {
    render() {
        const {data, fetchData, type} = this.props;
        let view;
        if(type == FETCHING) {
            view = <p className='text'>数据加载中...</p>;
        } else if(type == FETCH_SUCCESS){
            view = <p className='text'>  数据：{data}</p>;
        } else {
            view = <p className='text'>数据获取失败！</p>;
        }
        return (
            <div className='container'>
                <button onClick={fetchData} className='btn'>获取数据</button>
                {view}
            </div>
        );
    }
}

export default UIComponent;