import React from 'react';
import './test.css';

class UIComponent extends React.Component {
    render() {
        const {count, onPlusClick, onMinusClick} = this.props;
        return (
            <div className='container'>
                <button onClick={onMinusClick} className='btn'>-</button>
                <p className='text'>{count}</p>
                <button onClick={onPlusClick} className='btn'>+</button>
            </div>
        );
    }
}

export default UIComponent;