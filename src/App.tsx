import React from "react";
import "./App.css";
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
     </div>
  );
}

export default App;
