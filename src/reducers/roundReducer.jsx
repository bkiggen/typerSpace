import constants from './../constants';
const { c, initialState } = constants;


const roundReducer = (state = initialState, action) => {
  let newState;
  let newIsTraining;

  switch(action.type) {
    case c.NEW_ROUND:
    console.log('new round');
      const newRound = state.currentRound + 1;
      newIsTraining = true;

      newState = Object.assign({}, state, {
        currentRound: newRound,
        isTraining: newIsTraining,
        currentLetterPosition: 0
      });
      return newState;

    case c.UPDATE_CURRENT_LETTER:
      console.log("updateCurrentLetter is firing");
      const newLetterPosition = state.currentLetterPosition + 1;
        newState = Object.assign({}, state, {
          currentLetterPosition: newLetterPosition
      })
      return newState;

    case c.UPDATE_LETTERS_CORRECT:
      console.log("updateLettersCorrect is firing");
      const newLettersCorrect = state.lettersCorrect + 1;
        newState = Object.assign({}, state, {
          lettersCorrect: newLettersCorrect
      });
      return newState;

    case c.UPDATE_LETTERS_INCORRECT:
      console.log("updateLettersINCorrect is firing");
      const newLettersIncorrect = state.lettersIncorrect + 1;
      newState = Object.assign({}, state, {
        lettersIncorrect: newLettersIncorrect
      });
      return newState;

    case c.ADD_ROUND_STATS:
      console.log('add round stats is firiing');
      const roundData = {
        lettersCorrect: state.lettersCorrect,
        lettersIncorrect: state.lettersIncorrect
      };
      let newRoundStats = state.stats.roundStats;
      newRoundStats.push(roundData);
      let newStats = state.stats;
      newStats.roundStats = newRoundStats;
      newIsTraining = false;
      newState = Object.assign({}, state, {
        stats: newStats,
        isTraining: newIsTraining,
        lettersCorrect: 0,
        currentLetterPosition: 0,
        lettersIncorrect: 0
      });
      console.log('newState:' + newState.stats.roundStats[0])
      return newState;

    default:
      return state;
  }
};

export default roundReducer;
