import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

function Header() {

  const dispatch = useDispatch()

  const isUserLogin = useSelector((state) => {
    return state.userReducer.user.login
  });

  const exitFromApp = () => {
    localStorage.removeItem("login");

    dispatch({
      type: "USER_GO_OUT"
    })
  }
  

  return (
    <nav className="navbar navbar-light bg-light">
      <div className="container">
        <Link to={"/"} className="btn btn-primary">
          Головна
        </Link>
        {!isUserLogin && (
          <Link to={"/auth"} className="btn btn-primary">
            Увійти
          </Link>
        )}
        {isUserLogin && (
          <buttom onClick={exitFromApp} className="btn btn-primary">
            Вийти
          </buttom>
        )}
      </div>
    </nav>
  );
}

export default Header;
