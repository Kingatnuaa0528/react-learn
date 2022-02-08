import React from 'react';

import ProviderTest from './component/test-context/case.js';
import ReduxTestComponent from './component/test-redux/demo.js';
import ReduxAsyncComponent from './component/redux-async/demo.js';

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