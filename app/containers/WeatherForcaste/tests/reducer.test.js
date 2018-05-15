
import { fromJS } from 'immutable';
import weatherForcasteReducer from '../reducer';

describe('weatherForcasteReducer', () => {
  it('returns the initial state', () => {
    expect(weatherForcasteReducer(undefined, {})).toEqual(fromJS({}));
  });
});
