/*
 *
 * WeatherForcaste actions
 *
 */

import {
  DEFAULT_ACTION,
  REQUEST_WEATHER_DETAILS,
  GET_WEATHER_DETAILS,
  PUT_WEATHER_API_ERROR,
} from './constants';

export function defaultAction() {
  return {
    type: DEFAULT_ACTION,
  };
}

export function requestWeatherDetails(name) {
  return {
    type: REQUEST_WEATHER_DETAILS,
    name,
  };
}

export function setWeatherDetails(data) {
  return {
    type: GET_WEATHER_DETAILS,
    data,
  };
}

export function setWeatherApiError(error) {
  return {
    type: PUT_WEATHER_API_ERROR,
    error,
  };
}
