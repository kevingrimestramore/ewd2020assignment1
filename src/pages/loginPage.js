import React, { useState, useContext} from "react";
import { Link, Redirect } from "react-router-dom";
import * as api from '../api/tmdb-api';
import { Card,  Form, Input, Button, Error } from "../components/loginComponents";
import { useAuth } from "../contexts/authContext";
import {MoviesContext} from '../contexts/moviesContext'

function Login() {
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [isError, setIsError] = useState(false);
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const { setAuthToken } = useAuth();
  const context = useContext(MoviesContext);

  function userLogin() {
    api.login( userName, password)
    .then(result => {
      if (result.success) {
        setAuthToken(result.token);
        setLoggedIn(true);
      } else {
        setIsError(true);
      }
    }).catch(e => {
      console.log(e)
      setIsError(true);
    });
  }

  if (isLoggedIn) {
    context.setAuthenticated(true);
    return <Redirect to="/" />;
  }

  return (
    <Card>

      <Form>
        <Input
          type="username"
          value={userName}
          onChange={e => {
            setUserName(e.target.value);
          }}
          placeholder="username"
        />
        <Input
          type="password"
          value={password}
          onChange={e => {
            setPassword(e.target.value);
          }}
          placeholder="password"
        />
        <Button onClick={userLogin}>Sign In</Button>
      </Form>
      <Link to="/signup">Don't have an account?</Link>
        { isError &&<Error>The username or password provided were incorrect!</Error> }
    </Card>
  );
}

export default Login;