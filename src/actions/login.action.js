import {LOGIN_PROFILE_CHANGED} from '../Constants';

export const setLoginProfileChanged = (payload) => ({
  type: LOGIN_PROFILE_CHANGED,
  payload,
});

export const changeProfile = (profileName) => {
  return (dispatch) => {
    dispatch(setLoginProfileChanged(profileName));
  };
};
