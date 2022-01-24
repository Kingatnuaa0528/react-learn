import React from 'react';
import { ThemeContext } from './TestProvider';

class TestConsumer extends React.Component {
    componentDidMount() {
    }
    render() {
        return(
        <ThemeContext.Consumer>
            {
                value=> (
                    <button>{value}</button>
                )
            }
        </ThemeContext.Consumer>
        )
    }
}

export default TestConsumer;