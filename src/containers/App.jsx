import React from 'react';
import { Provider } from 'react-redux';
import store from '../store';
import HelloContainer from './Hello';

export default function App() {
  return (
    <Provider store={store}>
      <HelloContainer />
    </Provider>
  );
}
