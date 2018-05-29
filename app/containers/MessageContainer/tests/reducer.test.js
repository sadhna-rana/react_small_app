
import { fromJS } from 'immutable';
import messageContainerReducer from '../reducer';

describe('messageContainerReducer', () => {
  it('returns the initial state', () => {
    expect(messageContainerReducer(undefined, {})).toEqual(fromJS({}));
  });
});
