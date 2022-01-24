import './App.css';
import TestProvider from './component/test-context/TestProvider';
import ReduxTestComponent from './component/test-redux/test';

function App() {
  return (
    <div className="App">
      {/* <TestProvider value="Hello World!" /> */}
      <ReduxTestComponent />
    </div>
  );
}

export default App;
