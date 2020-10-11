import Axios from "axios";


export const getDefaultData = async () => {
  let data = await Axios.get("http://localhost:3000/response.json")
  let res = data.data.Result
  console.log(res,"res");
  return res;
}

export const registrationNewUser = async (email, password) => {
  let newUser = await Axios.post("http://localhost:4200/api/auth/register", {
    email,
    password
  })
  console.log(newUser);
  return newUser
}

export const loginUser = async (email, password) => {
  let newUser = await Axios.post("http://localhost:4200/api/auth/login", {
    email,
    password
  })
  return newUser
}