import React from 'react';
import ReactDOM from 'react-dom';
import Game from './components/Game';
import { HashRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import historyReducer from './reducers/history-reducer';

const store = createStore(historyReducer);


const render = (Component) => {
  ReactDOM.render(
    <HashRouter>
      <Provider store={store}>
        <Component/>
      </Provider>
    </HashRouter>,
    document.getElementById('react-app-root')
  );
};

render(Game);

/*eslint-disable */
if (module.hot) {
  module.hot.accept('./components/Game', () => {
    render(Game);
  });
}
/*eslint-enable */
