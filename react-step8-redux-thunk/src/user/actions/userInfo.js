import axios from 'axios';
export const FETCH_USER_BEGIN = "FETCH_USER_BEGIN";
export const FETCH_USER_SUCCESS = "FETCH_USER_SUCCESS";
export const FETCH_USER_FAILURE = "FETCH_USER_FAILURE";

export const fetchUserBegin = (id) => ({
  type: FETCH_USER_BEGIN,
  id
});

export const fetchUserSuccess = user => ({
  type: FETCH_USER_SUCCESS,
  payload: { user }
});

export const fetchUserFailure = error => ({
  type: FETCH_USER_FAILURE,
  payload: { error }
});


export function fetchUser(id) {
  return dispatch => {
    dispatch(fetchUserBegin());
    return axios
      .get("https://jsonplaceholder.typicode.com/users/"+ id)
      .then(response => {        
        dispatch(fetchUserSuccess(response.data));
        return response.data;
      })
      .catch(error => dispatch(fetchUserFailure(error)));
  };
}
