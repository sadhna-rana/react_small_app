/*
 *
 * WeatherForcaste reducer
 *
 */

import { fromJS } from 'immutable';
import {
  DEFAULT_ACTION,
  REQUEST_WEATHER_DETAILS,
} from './constants';

const initialState = fromJS({
  location: '',
});

function weatherForcasteReducer(state = initialState, action) {
  switch (action.type) {
    case DEFAULT_ACTION:
      return state;
    case REQUEST_WEATHER_DETAILS:
      console.log(action.location);
      return state.set(location, action.location);
    default:
      return state;
  }
}

export default weatherForcasteReducer;
