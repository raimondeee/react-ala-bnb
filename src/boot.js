import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import App from './components/App';

const render = Inner => {
  ReactDOM.render(
    React.createElement(AppContainer, null, React.createElement(Inner)),
    document.getElementById('root'),
  );
};

render(App);

// Webpack Hot Module Replacement API
if (module.hot) {
  module.hot.accept('./containers/App', () => {
    render(App);
  });
}
