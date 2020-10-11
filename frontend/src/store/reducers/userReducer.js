const initialState = {
  user: {}
}

const userReducer = (state = initialState, {type, payload}) => {
  switch (type) {
    case "LOGIN_USER":
      return {
        ...state,
        user: payload
      }
    case "USER_GO_OUT":
      return {
        ...state,
        user: {}
      }
    default:
      return state
  }
}

export default userReducer