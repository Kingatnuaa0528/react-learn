import React from 'react';
class UIComponent extends React.Component {
    render() {
        const {count, onPlusClick, onMinusClick} = this.props;
        return (
            <div style={styles.container}>
                <button onClick={onMinusClick} style={styles.btn}>-</button>
                <p style={styles.text}>{count}</p>
                <button onClick={onPlusClick} style={styles.btn}>+</button>
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