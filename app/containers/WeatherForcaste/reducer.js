/*
 *
 * WeatherForcaste reducer
 *
 */

import { fromJS } from 'immutable';
import {
  DEFAULT_ACTION,
  REQUEST_WEATHER_DETAILS,
  GET_WEATHER_DETAILS,
  PUT_WEATHER_API_ERROR,
} from './constants';

const initialState = fromJS({
  city: '',
  weather_details: [],
});

function weatherForcasteReducer(state = initialState, action) {
  switch (action.type) {
    case DEFAULT_ACTION:
      return state;
    case REQUEST_WEATHER_DETAILS:
      return state.set('city', action.name);
    case GET_WEATHER_DETAILS:
      return state.set('weather_details', action.data);
    case PUT_WEATHER_API_ERROR:
      return state.set('weather_api_error', action.error);
    default:
      return state;
  }
}

export default weatherForcasteReducer;
