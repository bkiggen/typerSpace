import constants from './../constants';
const { c, initialState } = constants;


const roundReducer = (state = initialState, action) => {
  let newState;
  let newIsTraining;

  switch(action.type) {
    case c.NEW_ROUND:
      const newRound = state.currentRound + 1;
      newIsTraining = !state.isTraining;

      newState = Object.assign({}, state, {
        currentRound: newRound,
        isTraining: newIsTraining
      });
      return newState;
    case c.UPDATE_CURRENT_LETTER:
    const newLetterPosition = state.currentLetterPosition + 1;
    newState = Object.assign({}, state, {
      currentLetterPosition: newLetterPosition
    })
      return newState;

    default:
      return state;

  }
};

export default roundReducer;
