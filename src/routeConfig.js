import React from 'react';

import ProviderTest from './component/test-context/test.js';
import ReduxTestComponent from './component/test-redux/test';
import ReduxAsyncComponent from './component/redux-async/test';

const routes = [
    {
        path: '/test-context',
        element: <ProviderTest/>
    },{
        path: '/test-redux',
        element: <ReduxTestComponent/>
    }, {
        path: '/redux-async',
        element: <ReduxAsyncComponent/>
    }
];

export default routes;