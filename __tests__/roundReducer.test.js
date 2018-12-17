import roundReducer from './../src/reducers/roundReducer';
import constants from './../src/constants';
const { c } = constants;


describe('roundReducer', () => {
  let action;

  test('Should return default state if no action is recognized', () => {
    expect(roundReducer({}, { type: null}).toEqual({}));
  });
})
