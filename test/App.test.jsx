import React from 'react';
import { shallow } from 'enzyme';
import App from '../src/containers/App';

describe('App', () => {
  let ctnr;

  beforeEach(() => {
    ctnr = shallow(<App />);
  });

  it('looks alright', () => {
    expect(ctnr).toMatchSnapshot();
  });
});
