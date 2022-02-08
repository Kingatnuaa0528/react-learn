import React from 'react';
import {BrowserRouter, Link, useRoutes} from 'react-router-dom';

import routeConfig from './routeConfig';

class App extends React.Component {
  GetRoutes = () => {
    let routes = useRoutes(routeConfig);
    return routes;
  };
  render() {
    return (
      <div style={styles.App}>
        <BrowserRouter>
          <div style={styles.Content}>
            <p>目录：</p>
            <li><Link to='/test-context'>conext API 测试</Link></li>
            <li><Link to='/test-redux'>redux 测试</Link></li>
            <li><Link to='/redux-async'>redux 异步测试</Link></li>
          </div>
          <div style={styles.Container}>
            <this.GetRoutes/>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

const styles = {
  App: {
    display: 'flex'
  },
  Content: {
    paddingLeft: '15px',
  },
  Container: {
    paddingTop: '10px',
    flex: '6 1 auto',
  }
}

export default App;
