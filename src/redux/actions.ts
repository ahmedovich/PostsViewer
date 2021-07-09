export const SET_USER_NAME = 'SET_USER_NAME';
export const SET_USER_PASSWORD = 'SET_USER_PASSWORD';
export const DELETE_USER_NAME = 'SET_USER_NAME';
export const DELETE_USER_PASSWORD = 'SET_USER_PASSWORD';

export type actionList = {
  name: string | null;
  password: any | null;
};

export const setName = name => dispatch => {
  dispatch({
    type: SET_USER_NAME,
    payload: name,
  });
};

export const setPassword = password => dispatch => {
  dispatch({
    type: SET_USER_PASSWORD,
    payload: password,
  });
};

export const deleteName = name => dispatch => {
  dispatch({
    type: SET_USER_NAME,
    payload: name,
  });
};

export const deletePassword = password => dispatch => {
  dispatch({
    type: SET_USER_PASSWORD,
    payload: password,
  });
};
