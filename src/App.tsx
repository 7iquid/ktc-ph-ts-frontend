import React from 'react';
import logo from './logo.svg';
import './App.css';
import './test/_custom.scss';
import {GetRequestAsyncAwait} from './request/requestko'

function App() {
  return (
    <div className="App">
        <h1> helo </h1>
        <GetRequestAsyncAwait />
    </div>
  );
}

export default App;
