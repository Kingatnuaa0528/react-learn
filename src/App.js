import './App.css';
import TestProvider from './component/test-context/TestProvider';
import ReduxTestComponent from './component/test-redux/test';
import ReduxAsyncComponent from './component/redux-async/test';

function App() {
  return (
    <div className="App">
      {/* <TestProvider value="Hello World!" /> */}
      {/* <ReduxTestComponent /> */}
      <ReduxAsyncComponent />
    </div>
  );
}

export default App;
