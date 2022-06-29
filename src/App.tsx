import React from 'react';
import logo from './logo.svg';
import './App.css';
import './test/_custom.scss';
import {GetRequestAsyncAwait} from './request/requestko'
import './test/_custom.scss'

type Props = { title: string, children: JSX.Element,};

const Box: React.FC<Props> = ({
  title,
  children,
}) => (
  <div style={{ padding: "1rem", fontWeight: "bold", }}>
  <h1>{title}</h1>
  {children}
  </div>
);


function App() {
  return (
    <div>
    <Box title="tamina">
       <h1>helo po</h1>
     </Box>
             >
        <GetRequestAsyncAwait />
     </div>

)}

export default App;
