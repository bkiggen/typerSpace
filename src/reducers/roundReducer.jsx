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
        isTraining: newIsTraining,
        currentLetterPosition: 0
      });
      return newState;

    case c.UPDATE_CURRENT_LETTER:
      const newLetterPosition = state.currentLetterPosition + 1;
        newState = Object.assign({}, state, {
          currentLetterPosition: newLetterPosition
      })
      return newState;

    case c.UPDATE_LETTERS_CORRECT:
      const newLettersCorrect = state.lettersCorrect + 1;
        newState = Object.assign({}, state, {
          lettersCorrect: newLettersCorrect
      })
      return newState;

    case c.UPDATE_LETTERS_INCORRECT:
      const newLettersIncorrect = state.lettersIncorrect + 1;
      newState = Object.assign({}, state, {
        lettersIncorrect: newLettersIncorrect
      });
      return newState;

    case c.ADD_ROUND_STATS:
      const roundData = {
        lettersCorrect: state.lettersCorrect,
        lettersIncorrect: state.lettersIncorrect
      };
      const newRoundStats = state.stats.roundStats.push(roundData);
      const newStats = state.stats;
      newStats.roundStats = newRoundStats;
      newState = Object.assign({}, state, {
        stats: newStats
      });
      console.log(state.roundStats);
      return newState;

    default:
      return state;

  }
};

export default roundReducer;
