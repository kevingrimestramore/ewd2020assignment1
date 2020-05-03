import React, { useState} from "react";
import { Link, Redirect } from "react-router-dom";
import * as api from '../api/tmdb-api';
import { Card,  Form, Input, Button, } from "../components/loginComponents";

function Signup() {
  //const [isLoggedIn, setLoggedIn] = useState(false);
  const [setIsError] = useState(false);
  const [registered, setRegistered] = useState(false);
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [passwordAgain, setPasswordAgain] = useState("");

  function register() {
    if (password !== passwordAgain) {
        setIsError(true);
    }else{
    api.signup( userName, password)
    .then(result => {
      if (result.code===201) {
        setRegistered(true);
      } else {
        setIsError(true);
      }
    }).catch(e => {
      console.log(e)
      setIsError(true);
    });
  }}

  if (registered) {
    return <Redirect to="/" />;
  }
  return (
    <Card>

      <Form>
        <Input type="username"
          value={userName}
          onChange={e => {
            setUserName(e.target.value);
          }}  placeholder="username" />
        <Input type="password"
          value={password}
          onChange={e => {
            setPassword(e.target.value);
          }} placeholder="password" />
        <Input type="password"
          value={passwordAgain}
          onChange={e => {
            setPasswordAgain(e.target.value);
          }} placeholder="password again" />
        <Button onClick={register}>Sign Up</Button>
      </Form>
      <Link to="/login">Already have an account?</Link>
    </Card>
  );
}

export default Signup;