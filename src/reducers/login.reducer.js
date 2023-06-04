import {LOGIN_PROFILE_CHANGED} from '../Constants';

const initialState = {
  profilename: '',
};

export default (state = initialState, {type, payload}) => {
  switch (type) {
    case LOGIN_PROFILE_CHANGED:
      return {...state, profilename: payload};

    default:
      return state;
  }
};
