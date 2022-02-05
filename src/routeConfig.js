import React from 'react';

import TestProvider from './component/test-context/TestProvider';
import ReduxTestComponent from './component/test-redux/test';
import ReduxAsyncComponent from './component/redux-async/test';

const routes = [
    {
        path: '/test-context',
        element: <TestProvider/>
    },{
        path: '/test-redux',
        element: <ReduxTestComponent/>
    }, {
        path: '/redux-async',
        element: <ReduxAsyncComponent/>
    }
];

export default routes;