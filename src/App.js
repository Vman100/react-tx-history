import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Provider } from 'react-redux';
import TxHistoryComponent from './TxHistoryComponent';
import store from './store';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Provider store={store}>
          <TxHistoryComponent />
        </Provider>
      </header>
    </div>
  );
}

export default App;
