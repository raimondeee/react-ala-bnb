import React from 'react';
import PropTypes from 'prop-types';
import { withStyles, css, withStylesPropTypes } from '../../helpers/withStyles';
import AnimatedComponent from './AnimatedComponent';

class StudentName extends AnimatedComponent {
  static propTypes = {
    ...withStylesPropTypes,
    children: PropTypes.node,
    onClick: PropTypes.func.isRequired,
  };

  handleClick = e => {
    this.props.onClick();
    e.target.blur();
    this.animate();
  };

  render() {
    const { styles, children, onClick } = this.props;
    return (
      <div {...css(styles.container)}>
        <button
          {...css(styles.button, this.state.animated ? styles.animated : {})}
          onClick={this.handleClick}
        >
          {children}
        </button>
      </div>
    );
  }
}

export default withStyles(({ color }) => ({
  container: {
    flex: 1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },

  button: {
    border: '1px dashed transparent',
    background: 'transparent',
    fontFamily: `cursive`,
    color: 'blue',
    fontSize: '16vmin',
    cursor: 'pointer',
    ':hover': {
      borderColor: 'purple',
    },
    transition: 'transform ease .2s',
  },

  animated: {
    transform: 'scale(1.6)',
  },
}))(StudentName);
