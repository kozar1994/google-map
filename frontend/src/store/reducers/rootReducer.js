import { combineReducers } from 'redux'

import userReducer from 'store/reducers/userReducer'

const rootReducer = combineReducers({
  userReducer,
})

export default rootReducer