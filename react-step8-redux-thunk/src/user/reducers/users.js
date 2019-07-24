import {
  FETCH_USERS_BEGIN,
  FETCH_USERS_SUCCESS,
  FETCH_USERS_FAILURE,
  REMOVE_USER_CLICK
} from '../actions/users';

const initialState = {
  users: [],
  loading: false,
  error: null
};

export default function usersReducer(state = initialState, action) {
  switch(action.type) {
    case FETCH_USERS_BEGIN:            
      return {
        ...state, // 把 state 標記為 "loading" 這樣我們就可以顯示 spinner 或者其他內容
        loading: true,
        error: null // 同樣，重置所有錯誤信息。我們從新開始。  
      }; 

    case FETCH_USERS_SUCCESS:
      return {
        ...state,
        loading: false, //全部完成：設置 loading 為 "false"。
        users: action.payload.users //// 同樣，把從服務端獲取的數據賦給 users
      };

    case FETCH_USERS_FAILURE:
      return {
        ...state,
        loading: false, // 請求失敗，設置 loading 為 "false".
        error: action.payload.error, // 保存錯誤信息，這樣我們就可以在其他地方展示。
        users: [] // 既然失敗了，我們沒有使用者可以展示，因此要把 `users` 清空。
      };
    
    case REMOVE_USER_CLICK:      
      let newUsers = state.users.filter(user => user.id !== action.id);
      return {
        ...state,
        loading: false,        
        users: newUsers
      }

    default:
      // reducer 需要有 default case。
      return state;
  }
}