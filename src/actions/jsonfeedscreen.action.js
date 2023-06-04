import {JSON_FETCHING, JSON_SUCCESS, JSON_FAILED} from '../Constants';
import axios from 'axios';

export const setJSONFetching = () => ({
  type: JSON_FETCHING,
});

export const setJSONSuccess = (payload) => ({
  type: JSON_SUCCESS,
  payload,
});

export const setJSONFailed = () => ({
  type: JSON_FAILED,
});

export const feedJSON = () => {
  return async (dispatch) => {
    try {
      dispatch(setJSONFetching());
      const result = await doLoadDataWithPost();
      dispatch(setJSONSuccess(result));
    } catch (error) {
      dispatch(setJSONFailed());
    }
  };
};

const doLoadDataWithPost = async () => {
  let regUsername = 'admin'; // await AsyncStorage.getItem('username')
  let regPassword = 'password'; // await AsyncStorage.getItem('password')
  // urlencoded
  let data = `username=${regUsername}&password=${regPassword}&type=foods`;
  const url = 'http://xxxxxx/adhoc/youtubes/index_new.php';
  let result = await axios.post(url, data);
  return result.data.youtubes;
};
