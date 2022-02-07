import React from 'react';

import TestProvider from './TestProvider';

class ProviderTest extends React.Component {
    render() {
        return(
            <div style={{textAlign: 'center'}}>
                <TestProvider value='Hello World!' />
            </div>
        );
    }
}

export default ProviderTest;
