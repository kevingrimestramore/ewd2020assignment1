import React, { createContext, useContext, useState } from 'react';

export const AuthContext = createContext();

const AuthContextProvider = props => {
  const existingToken = localStorage.getItem("token");
  const [authToken, setAuthToken] = useState(existingToken);
  const setToken = (data) => {
    localStorage.setItem("token", data);
    setAuthToken(data);
  }

  return (
      <AuthContext.Provider
        value={{
          authToken,
          setAuthToken: setToken
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