import React, { createContext, useContext, useState } from 'react';

export const AuthContext = createContext();

const AuthContextProvider = props => {
  const existingToken = localStorage.getItem("token")
  const existingUser = localStorage.getItem("user");;
  const [authToken, setAuthToken] = useState(existingToken);
  const [authUser, setAuthUser] = useState(existingUser);

  const setToken = (data) => {
    localStorage.setItem("token", data);
    setAuthToken(data);
  }

  const setUser = (data) => {
    localStorage.setItem("user", data);
    setAuthUser(data);
  }

  return (
      <AuthContext.Provider
        value={{
          authToken,
          setAuthToken: setToken,
          authUser,
          setUser
        }}
      >
        {props.children}
      </AuthContext.Provider>    
  )
}

export function useAuth() {
  return useContext(AuthContext);
}

export default AuthContextProvider;