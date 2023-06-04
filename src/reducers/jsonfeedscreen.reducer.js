import {JSON_FETCHING, JSON_SUCCESS, JSON_FAILED} from '../Constants';

const initialState = {
  dataArray: [],
  isFetching: false,
  isError: false,
};

export default (state = initialState, {type, payload}) => {
  switch (type) {
    case JSON_FETCHING:
      return {...state, dataArray: [], isFetching: true, isError: false};
    case JSON_SUCCESS:
      return {...state, dataArray: payload, isFetching: false, isError: false};
    case JSON_FAILED:
      return {...state, dataArray: [], isFetching: false, isError: true};
    default:
      return state;
  }
};
