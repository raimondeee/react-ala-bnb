import React from 'react';
import PropTypes from 'prop-types';
import { withStyles, css, withStylesPropTypes } from '../helpers/withStyles';

class Button extends React.PureComponent {

  static propTypes = {
    ...withStylesPropTypes,
    disabled: PropTypes.bool,
    children: PropTypes.node.isRequired,
    onClick: PropTypes.func.isRequired
  };

  handleRef = btn => {
    this.btn = btn;
  };

  handleMouseMove = (e) => {
    const {btn} = this;
    var x = e.pageX - btn.offsetLeft;
    var y = e.pageY - btn.offsetTop;
    btn.style.setProperty('--x', x + 'px');
    btn.style.setProperty('--y', y + 'px');
  };

  render() {
    const {styles, disabled, children} = this.props;

    return (
      <button {...css(styles.btn, disabled ? styles.disabled : styles.enabled)} 
        onClick={this.props.onClick}
        disabled={disabled} 
        onMouseMove={this.handleMouseMove}
        ref={this.handleRef}
      >
        <span {...css(styles.span)}>{children}</span>
      </button>
    );
  }
}

export default withStyles(({color}) => ({
  
  btn: {
    userSelect: 'none',
    padding: 0,
    borderRadius: 99,
    border: '1px solid #AAA',
    backgroundColor: 'white',
    marginRight: 2,
    outline: 'none',
    fontSize: '200%',
    position: 'relative',
    overflow: 'hidden',
    '::before': {
      '--size': 0,
      content: "''",
      position: "absolute",
      left: "var(--x)",
      top: "var(--y)",
      width: "var(--size)",
      height: "var(--size)",
      background: "radial-gradient(circle closest-side, yellow, transparent)",
      transform: "translate(-50%, -50%)",
      transition: "width .2s ease, height .2s ease",
    }
  },

  enabled: {
    cursor: 'pointer',
    ':active': {
      boxShadow: 'inset 2px 1px 5px 0 #999'
    },
    ':hover': {
      borderColor: '#666',
      backgroundColor: '#AAA',
      color: 'white',
      '::before': {
        '--size': 200,
      }
    },
    ':focus': {
      borderStyle: 'dotted'
    }
  },

  disabled: {
    opacity: .5
  },

  span: {
    padding: '0 1em',
    lineHeight: 2
  }
  
}))(Button);