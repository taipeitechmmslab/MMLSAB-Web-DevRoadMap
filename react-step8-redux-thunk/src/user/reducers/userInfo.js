import {
  FETCH_USER_BEGIN,
  FETCH_USER_SUCCESS,
  FETCH_USER_FAILURE
} from "../actions/userInfo";

const initialState = {
  user: { id: "", name: "", phone: "", email: "" },
  loading: false,
  error: null
};

export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_USER_BEGIN:
      return {
        ...state, // 把 state 標記為 "loading" 這樣我們就可以顯示 spinner 或者其他內容
        loading: true,
        error: null // 同樣，重置所有錯誤信息。我們從新開始。
      };

    case FETCH_USER_SUCCESS:
      return {
        ...state,
        loading: false, //全部完成：設置 loading 為 "false"。
        user: action.payload.user //// 同樣，把從服務端獲取的數據賦給 user
      };

    case FETCH_USER_FAILURE:
      return {
        ...state,
        loading: false, // 請求失敗，設置 loading 為 "false".
        error: action.payload.error, // 保存錯誤信息，這樣我們就可以在其他地方展示。
        user: {} // 既然失敗了，我們沒有使用者可以展示，因此要把 `user` 清空。
      };

    default:
      // reducer 需要有 default case。
      return state;
  }
}
