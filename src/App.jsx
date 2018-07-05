import React from 'react';
import Greeter from './Greeter';

// function App() {
//   return (
//     <div>
//       <h1>Hello</h1>
//       <p>
//         Lorem ipsum dolor amet tbh blue bottle kombucha vegan raw denim you
//         probably haven't heard of them.
//       </p>
//       <Greeter />
//     </div>
//   );
// }

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Hello</h1>
        <p>
          Lorem ipsum dolor amet tbh blue bottle kombucha vegan raw denim you
          probably haven't heard of them.
        </p>

        <Greeter />
      </div>
    );
  }
}

export default App;
