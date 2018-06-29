import React from 'react';
import HelloBtn from '../../components/HelloBtn';

// TODO: redux

export default class HelloContainer extends React.PureComponent {
  state = {
    clicks: 0,
  };

  increaseClicks = () => {
    const { clicks } = this.state;
    this.setState({
      clicks: clicks + 1,
    });
  };

  render() {
    const { clicks } = this.state;

    return <HelloBtn onClick={this.increaseClicks}>{clicks}</HelloBtn>;
  }
}
