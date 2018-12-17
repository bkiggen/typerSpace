import constants from './../constants';
const { c, initialState } = constants;


export default (state = initialState, action) => {
  console.log(state);
  let newState;
  // const { names, location, issue, timeOpen, id, formattedWaitTime } = action; how will I use this?

  switch(action.type) {
    case c.NEW_ROUND:
      newState = Object.assign({}, state, {
        currentRound: 2
      });
      return newState;

    default:
      return state;

  };

}
