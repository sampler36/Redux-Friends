import * as types from './actionTypes';

const initialState = {
  friends: [],
  friendSelected: {},
  showUpdate: false,
  gettingFriends: false,
  updatingFriend: false,
  creatingFriend: false,
  deletingFriend: false,
  error: null
};


export const friends = (state = initialState, action) => {
  switch (action.type) {
    case types.ADD_FRIEND:
    return {}
    default:
      return state;
  }
};

  export const friend = (state = initialState, action) => {
    switch (action.type) {
        case types.DELETE_FRIEND:
        return {}
    
      default:
        return state;
    }
  };