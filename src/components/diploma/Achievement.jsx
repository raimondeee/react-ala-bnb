import React from "react";
import PropTypes from "prop-types";
import { withStyles, css, withStylesPropTypes } from "../../helpers/withStyles";
import AnimatedComponent from "./AnimatedComponent";

class Achievement extends AnimatedComponent {
  static propTypes = {
    ...withStylesPropTypes,
    children: PropTypes.node,
    onClick: PropTypes.func.isRequired
  };

  handleClick = e => {
    this.props.onClick();
    this.animate();
    e.target.blur();
  };

  render() {
    const { styles, children } = this.props;
    return (
      <div
        {...css(styles.container, this.state.animated ? styles.animated : {})}
      >
        <div>has completed the requirements of</div>
        <button {...css(styles.button)} onClick={this.handleClick}>
          {children}
        </button>
      </div>
    );
  }
}

export default withStyles(({ color }) => ({
  container: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    fontFamily: `monospace`
  },

  animated: {
    transition: "transform ease-out .6s",
    transform: "rotate(360deg)"
  },

  button: {
    border: "1px dashed transparent",
    background: "transparent",
    cursor: "pointer",
    fontFamily: `'Bangers', cursive`,
    fontSize: "8vmin",
    ":hover": {
      borderColor: "orange"
    }
  }
}))(Achievement);
