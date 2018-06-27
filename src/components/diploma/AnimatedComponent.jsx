import React from 'react';

class AnimatedComponent extends React.PureComponent {
  constructor() {
    super();
    this.state = {
      animated: false,
    };
    this.animate = () => {
      this.setState({ animated: true }, () => {
        setTimeout(() => {
          this.setState({ animated: false });
        }, 666);
      });
    };
  }

  render() {
    return this.state.animated;
  }
}

export default AnimatedComponent;
