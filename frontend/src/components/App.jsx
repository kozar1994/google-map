import React from "react";
import { Redirect, Route } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { Header } from "components";

import HomePage from "pages/HomePage";
import AuthPage from "pages/AuthPage";

function App() {
  const dispatch = useDispatch();

  const stateUser = useSelector((state) => {
    return state.userReducer.user.login;
  });


  React.useEffect(()=>{
    const localLogin = JSON.parse(localStorage.getItem("login"))
    console.log(localLogin,'------>');
    if (localLogin !== null && localLogin.login) {
      dispatch({
        type: "LOGIN_USER",
        payload: {
          login: true,
          token: localLogin
        }
      })
    }
  })

  return (
    //AIzaSyBci1mGRYnglwUxOqWrLmj-M1IrpGt7FuY
    <>
      <Header />
      <Route exact path={'/'} component={HomePage}/>

      <Route exact path={'/auth'}>
        {stateUser ? <Redirect to="/" /> : <AuthPage />}
      </Route>
    </>
  );
}

export default App;
