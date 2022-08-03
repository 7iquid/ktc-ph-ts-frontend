import React, { useState, useContext, createContext,ReactNode} from "react";
const AuthContext = createContext<any>(undefined);

interface api{
  children :ReactNode
}
function age(){
  console.log('asdw')
}
export const AuthProvider = ( {children}:api) => {
  let a: boolean = false
  const [auth, setAuth] = useState(false);
  console.log('AuthProvider =========1', auth, a)
  
  const handleAuth = () => {
    setAuth(!auth);
    a = !a
    console.log('AuthProvider =========2' , auth, a)
  };
  const pogi = [auth, handleAuth, a];
  return <AuthContext.Provider value={pogi} >{children}  </AuthContext.Provider>;
};

export const useAuth = ({ children }:any) => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth can only be used inside AuthProvider");
  }
  return context;
};


const Sample = () => {
  const [auth, handleAuth, c] = useAuth(useAuth);
  let a = 'mali'
  let b = 'tama'
  return (
    <div>
      <h3>Is authenticated?</h3>
      <h1>{auth === false ? `${a}` : `${b}`}  </h1>
      <button onClick={handleAuth}>Change auth</button>
    </div>
  );
};