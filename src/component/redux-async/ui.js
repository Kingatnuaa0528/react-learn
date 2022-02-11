import React from 'react';
import { FETCHING, FETCH_SUCCESS, FETCH_FAIL } from './fetchData'

class UIComponent extends React.Component {
    render() {
        const {data, fetchData, type} = this.props;
        let view;
        if(type == FETCHING) {
            view = <p style={styles.text}>数据加载中...</p>;
        } else if(type == FETCH_SUCCESS){
            view = <p style={styles.text}>  数据：{data}</p>;
        } else {
            view = <p style={styles.text}>数据获取失败！</p>;
        }
        return (
            <div style={styles.container}>
                <button onClick={fetchData} style={styles.btn}>获取数据</button>
                {view}
            </div>
        );
    }
}

const styles = {
    container: {
        textAlign: 'center',
        display: 'flex',
        justifyContent: 'center'
    },
    btn: {
        marginLeft: '10px',
        marginRight: '10px'
    },
    text: {
        fontSize: '16px'
    }
}

export default UIComponent;