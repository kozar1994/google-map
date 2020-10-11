import {loginUser} from 'services/defaultService'

export const ifUserLogin = (mail, pass) => {
  return dispatch => {
    loginUser(mail, pass).then((res)=>{
      console.log(res, "login");
      localStorage.setItem("login", JSON.stringify({
        token: res.data.token,
        login: true
      }))

      dispatch({
        type: "LOGIN_USER",
        payload: {
          login: true,
          token: res.data.token
        }
      })
    })
  }
}
