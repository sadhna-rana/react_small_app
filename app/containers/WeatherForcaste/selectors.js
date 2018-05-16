import { createSelector } from 'reselect';

/**
 * Direct selector to the weatherForcaste state domain
 */
const selectWeatherForcasteDomain = (state) => state.get('weatherForcaste');

/**
 * Other specific selectors
 */


/**
 * Default selector used by WeatherForcaste
 */

const makeSelectWeatherForcaste = () => createSelector(
  selectWeatherForcasteDomain,
  (substate) => substate.toJS()
);

const makeSelectWeatherLocation = () => createSelector(
  selectWeatherForcasteDomain,
  (substate) => substate.get('city')
);

const makeSelectWeatherDetails = () => createSelector(
  selectWeatherForcasteDomain,
  (substate) => substate.get('weather_details')
);

const makeSelectWeatherApiError = () => createSelector(
  selectWeatherForcasteDomain,
  (substate) => substate.get('weather_api_error')
);

export default makeSelectWeatherForcaste;
export {
  selectWeatherForcasteDomain,
  makeSelectWeatherLocation,
  makeSelectWeatherDetails,
  makeSelectWeatherApiError,
};
