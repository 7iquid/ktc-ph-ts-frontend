import React from 'react';
import './App.css';
import Weather from './componets/Weather/weather';
import {Helmet} from 'react-helmet';



function App() {

  return (
    <div>
            <Helmet>
                <style>{'body { background-color: #008B8B;background: linear-gradient(to bottom, #4169E1, #008B8B); }'}</style>
            </Helmet>
            <Weather/>
     </div>
)}

export default App;
