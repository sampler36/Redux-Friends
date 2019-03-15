import * as types from './actionTypes';
// import uuid  from 'uuid';


export const login = (username, password) => dispatch => {
  fetch(`http://localhost:5000/api/friends/login?username=${username}&password=${password}`)
    .then(res => res.json())
    .then(data => {
      dispatch({ type: 'LOGIN_SUCCESS', payload: data.userToken });
    });
};
export function spinnerOn() {
  return {
    type: types.SPINNER_ON,
  };
}

export function spinnerOff() {
  return {
    type: types.SPINNER_OFF,
  };
}
