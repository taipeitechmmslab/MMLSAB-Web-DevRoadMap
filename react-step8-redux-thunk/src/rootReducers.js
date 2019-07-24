import { combineReducers } from 'redux'
import todos from './todo/reducers/todos'
import visibilityFilter from './todo/reducers/visibilityFilter'
import counter from './counter/reducer';
import usersReducer from './user/reducers/users';
import userInfoReducer from './user/reducers/userInfo';


export default combineReducers({
  todos,
  visibilityFilter,
  counter,
  usersReducer,
  userInfoReducer
})