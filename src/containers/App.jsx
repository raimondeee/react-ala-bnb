import React from 'react';
import Redux from 'redux';
import store from '../store';
import ThingContainer from './ThingContainer';
import DiplomaContainer from './DiplomaContainer';
import HighlightingTextarea from '../components/HighlightingTextarea';
import { Provider } from 'react-redux';

export default class App extends React.PureComponent {
  render() {
    return (
      <Provider store={store}>
        <DiplomaContainer />
        {/* <div>
          <h1>Hello from React!</h1>
          <ThingContainer />
          <div style={{paddingTop: '2em'}}>

            <HighlightingTextarea
              initialHtml="foo bar <em>hello</em> world<div>im a block</div>" 
              cssMap={{
                'em': {
                  style: {
                    backgroundColor: 'yellow'
                  }
                },
                'div': {
                  style: {
                    backgroundColor: 'blue',
                    marginTop: '1em'
                  },
                  contentEditable: false                  
                }
              }}
            />

          </div>
        </div> */}
      </Provider>
    );
  }
}
