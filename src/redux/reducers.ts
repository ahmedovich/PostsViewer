import {
  SET_USER_NAME,
  SET_USER_PASSWORD,
  DELETE_USER_NAME,
  DELETE_USER_PASSWORD,
} from './actions';

const initialState = {
  name: null,
  password: null,
};

function userReducer(state = initialState, action) {
  switch (action.type) {
    case SET_USER_NAME:
      return {...state, name: action.payload};
    case SET_USER_PASSWORD:
      return {...state, password: action.payload};
    case DELETE_USER_NAME:
      return {...state, name: action.payload};
    case DELETE_USER_PASSWORD:
      return {...state, password: action.payload};
    default:
      return state;
  }
}

export default userReducer;
