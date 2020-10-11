import React from "react";

import { useDispatch, useSelector } from 'react-redux'

import { registrationNewUser } from "services/defaultService";
import { ifUserLogin } from "store/actions/userAcrion";

function AuthPage() {
  const [loginEmail, setLoginEmail] = React.useState("");
  const [loginPass, setLoginPass] = React.useState("");
  
  const [regEmail, setRegEmail] = React.useState("");
  const [regPass, setRegPass] = React.useState("");
  const [massegeError, setMassegeError] = React.useState("");
  const [timer, setTimer] = React.useState();
  const [regCompleted, setRegCompleted] = React.useState(false);

  const isUserLogin = useSelector(state => {
    return state.userReducer.user.login
  })
  
  const dispatch = useDispatch()

  const onRegEmailFromHandler = (e) => {
    setRegEmail(e.target.value);
  };

  const onRegPassFromHandler = (e) => {
    setRegPass(e.target.value);
  };

  const onLoginEmailFromHandler = (e) => {
    setLoginEmail(e.target.value);
  };

  const onLoginPassFromHandler = (e) => {
    setLoginPass(e.target.value);
  };

  const onButtomLogin = () => {
    dispatch(ifUserLogin(loginEmail,loginPass))
  }

  const onButtomRegister = () => {
    registrationNewUser(regEmail, regPass)
      .then((res) => {
        // console.log(res);
        if (res.data.status === "CREATE_NEW_USER") {
          setRegCompleted(true);
        }
      })
      .catch((err) => {
        if (err.response) {
          // console.log(err.response, "err.response");
          if (err.response.status === 409) {
            setMassegeError(err.response.data.massenge);
            setTimer(
              setTimeout(() => {
                setMassegeError("");
              }, 5000)
            );
          }
        } else if (err.request) {
          console.log(err.request, "err.request");
        } else {
          console.log(err, "err");
        }
      });
  };

  React.useEffect(() => {
    return () => {
      clearTimeout(timer);
    };
  }, [timer]);

  return (
    <div className="container">
      {isUserLogin && (
        <div className="alert alert-warning mt-4" role="alert">
          Ви увійшли в додаток
        </div>
      )}
      <div className="row mt-4">
        <div className="col">
          <div className="card p-4">
            <h5 className="card-title">Увійти</h5>
            <div className="form-group">
              <label htmlFor="loginEmail">Email address</label>
              <input
                type="email"
                className="form-control"
                id="loginEmail"
                onChange={onLoginEmailFromHandler}
              />
            </div>
            <div className="form-group">
              <label htmlFor="loginPass">Password</label>
              <input
                type="password"
                className="form-control"
                id="loginPass"
                onChange={onLoginPassFromHandler}
              />
            </div>
            <button onClick={onButtomLogin} type="submit" className="btn btn-primary">
              Login
            </button>
          </div>
        </div>

        <div className="col">
          <div className="card p-4">
            {massegeError && (
              <div className="alert alert-warning" role="alert">
                {massegeError}
              </div>
            )}
            <h5 className="card-title">Реєстрація</h5>
            {regCompleted && (
              <div className="alert alert-success" role="alert">
                Успішна реєстраці. Можете увійти!
              </div>
            )}
            {!regCompleted && (
              <>
                <div className="form-group">
                  <label htmlFor="emailReg">Email address</label>
                  <input
                    type="email"
                    className="form-control"
                    id="emailReg"
                    onChange={onRegEmailFromHandler}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="passReg">Password</label>
                  <input
                    type="password"
                    className="form-control"
                    id="passReg"
                    onChange={onRegPassFromHandler}
                  />
                </div>
                <button
                  onClick={onButtomRegister}
                  type="submit"
                  className="btn btn-primary"
                >
                  Submit
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default AuthPage;
