import React, { createContext } from "react";
import TestConsumer from './TestConsumer';

export let ThemeContext = createContext("");
class TestProvider extends React.Component {
    render() {
        return(
            <ThemeContext.Provider value={this.props.value}>
                <TestConsumer/>
            </ThemeContext.Provider>
        );
    }
}

export default TestProvider;