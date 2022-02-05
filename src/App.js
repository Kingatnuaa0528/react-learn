import React from 'react';
import {BrowserRouter, Link, useRoutes} from 'react-router-dom';

import './App.css';
import routeConfig from './routeConfig';

class App extends React.Component {
  GetRoutes = () => {
    let routes = useRoutes(routeConfig);
    return routes;
  };
  render() {
    
    console.log({routeConfig});
    return (
      <BrowserRouter className="App">
        <this.GetRoutes/>
        <li><Link to='/test-context'>conext API 测试</Link></li>
        <li><Link to='/test-redux'>redux 测试</Link></li>
        <li><Link to='/redux-async'>redux 异步测试</Link></li>
      </BrowserRouter>
    );
  }
}

export default App;
