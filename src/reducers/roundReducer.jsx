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
      let startTime = Date.now();
      roundData = {
        lettersCorrect: 0,
        lettersIncorrect: 0,
        timeStarted: startTime,
        roundTime: null,
        wordsPerMinute: null,
        accuracy: null
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
      let newLettersIncorrect = state.stats.roundStats[state.currentRound - 1].lettersIncorrect + 1;

      newStats = state.stats;
      newStats.roundStats[state.currentRound - 1].lettersIncorrect = newLettersIncorrect;

      newState = Object.assign({}, state, {
        stats: newStats
      });
      return newState;

    case c.END_ROUND:
      newStats = state.stats;
      let newTimeStarted = newStats.roundStats[state.currentRound - 1].timeStarted;

      let newRoundTime = (Date.now() - newTimeStarted) / 1000;


      let newWordsPerMinute = (newStats.roundStats[state.currentRound - 1].lettersCorrect / 5) / (newRoundTime / 1000 / 60);

      let newAccuracy = (newStats.roundStats[state.currentRound - 1].lettersCorrect - newStats.roundStats[state.currentRound - 1].lettersIncorrect) / (59) * 100;


      newStats.roundStats[state.currentRound - 1].accuracy = newAccuracy;
      newStats.roundStats[state.currentRound - 1].wordsPerMinute = newWordsPerMinute;
      newStats.roundStats[state.currentRound - 1].roundTime = newRoundTime;

      newState = Object.assign({}, state, {
        isTraining: false,
        lettersCorrect: 0,
        currentLetterPosition: 0,
        lettersIncorrect: 0,
        stats: newStats,
      });
      return newState;

    default:
      return state;
  }
};

export default roundReducer;
