import React from 'react';
import GetRequestAsyncAwait from '../request/requestko'


type Props = { title: string, children: JSX.Element,};

const Box: React.FC<Props> = ({
  title,
  children,
}) => (

  <div style={{ padding: "1rem", fontWeight: "bold", }}>
  <h1>{title}</h1>
  {children}
  <GetRequestAsyncAwait>
  </GetRequestAsyncAwait>

  </div>

);


export default Box;