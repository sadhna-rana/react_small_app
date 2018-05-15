/*
 *
 * WeatherForcaste actions
 *
 */

import {
  DEFAULT_ACTION,
  REQUEST_WEATHER_DETAILS,
} from './constants';

export function defaultAction() {
  return {
    type: DEFAULT_ACTION,
  };
}

export function requestWeatherDetails(name) {
  return {
    type: REQUEST_WEATHER_DETAILS,
    location: name,
  };
}
