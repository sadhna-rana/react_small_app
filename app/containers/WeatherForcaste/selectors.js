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
  (substate) => substate.get('location')
);

export default makeSelectWeatherForcaste;
export {
  selectWeatherForcasteDomain,
  makeSelectWeatherLocation,
};
