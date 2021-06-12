import { csrfFetch } from './csrf';
// import { useHistory } from 'react-router-dom';

const SET_USER = 'session/setUser';
const REMOVE_USER = 'session/removeUser';

const setUser = (user) => {
  return {
    type: SET_USER,
    payload: user,
  };
};

const removeUser = () => {
  return {
    type: REMOVE_USER,
  };
};

export const signup = (user) => async (dispatch) => {
    const { fullName, emailAddress, password, Biography } = user;

    const response = await csrfFetch("/api/users/", {
      method: "POST",
      body: JSON.stringify({
        fullName,
        emailAddress,
        password,
        Biography
      }),
    });
    const data = await response.json();
    dispatch(setUser(data.user));
    return response;
};

export const login = (user) => async (dispatch) => {
  const { credential, password } = user;
  console.log('credential in store', credential)
  console.log('password in store', password)
  const response = await csrfFetch('/api/session/', {
    method: 'POST',
    body: JSON.stringify({
      credential,
      password,
    }),
  });
  const data = await response.json();
  // console.log("this is data", data)
  dispatch(setUser(data.user));
  // history.push('/')
  return data;
};

export const restoreUser = () => async dispatch => {
    const response = await csrfFetch('/api/session/');
    const data = await response.json();
    dispatch(setUser(data.user));
    return response;
};

export const logout = () => async (dispatch) => {
    const response = await csrfFetch('/api/session', {
      method: 'DELETE',
    });
    dispatch(removeUser());
    return response;
};

const initialState = { user: null };

const sessionReducer = (state = initialState, action) => {
  let newState;
  switch (action.type) {
    case SET_USER:
      newState = Object.assign({}, state);
      newState.user = action.payload;
      return newState;
    case REMOVE_USER:
      newState = Object.assign({}, state);
      newState.user = null;
      return newState;
    default:
      return state;
  }
};

export default sessionReducer;
