import constants from './../constants';
const { c, initialState } = constants;


const roundReducer = (state = initialState, action) => {
  let newState;
  let newIsTraining;
  let roundData;
  let newStats;
  let newRound;

  switch(action.type) {
    case c.NEW_ROUND:
      newRound = state.currentRound + 1;
      newIsTraining = true;

      roundData = {
        lettersCorrect: 0,
        lettersIncorrect: 0
      };

      newRound = state.currentRound + 1;
      newStats = state.stats;
      newStats.roundStats.push(roundData);

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
      let newLettersCorrect = state.stats.roundStats[state.currentRound - 1].lettersCorrect + 1;

      newStats = state.stats;
      newStats.roundStats[state.currentRound - 1].lettersCorrect = newLettersCorrect;

      newState = Object.assign({}, state, {
        stats: newStats
      });
      return newState;



    case c.UPDATE_LETTERS_INCORRECT:
      let newLettersIncorrect = state.stats.roundStats[state.currentRound - 1].lettersCorrect + 1;

      newStats = state.stats;
      newStats.roundStats[state.currentRound - 1].lettersCorrect = newLettersIncorrect;

      newState = Object.assign({}, state, {
        stats: newStats
      });

      return newState;

    case c.ADD_ROUND_STATS:

      newState = Object.assign({}, state, {
        isTraining: false,
        lettersCorrect: 0,
        currentLetterPosition: 0,
        lettersIncorrect: 0
      });

      return newState;

    default:
      return state;
  }
};

export default roundReducer;
