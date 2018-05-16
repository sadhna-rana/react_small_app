import { call, put, select, takeLatest } from 'redux-saga/effects';
import axios from 'axios';
import { setWeatherDetails, setWeatherApiError } from './actions';
import makeSelectWeatherLocation from 'containers/WeatherForcaste/selectors';
import { REQUEST_WEATHER_DETAILS, WEATHER_API_CALL, WEATHER_API_ID } from './constants';

function* requestWeatherDetails() {
  const name = yield select(makeSelectWeatherLocation());
  const url = `${'http://query.yahooapis.com/v1/public/yql?q=select wind from weather.forecast where woeid in (select woeid from geo.places(1) where text="'}${name.city}${'")&format=json'}`;
  const response = yield call(axios.get, url);
  try {
    if (response) {
      yield put(setWeatherDetails(response.data));
    }
  } catch (e) {
    yield put(setWeatherApiError(e.message));
  }
}

export default function* defaultSaga() {
  yield takeLatest(REQUEST_WEATHER_DETAILS, requestWeatherDetails);
}
