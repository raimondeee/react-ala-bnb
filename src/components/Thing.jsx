import React from 'react';
import PropTypes from 'prop-types';
import { withStyles, css, withStylesPropTypes } from '../helpers/withStyles';

class Thing extends React.PureComponent {
  static propTypes = {
    ...withStylesPropTypes,
    children: PropTypes.node.isRequired,
  };

  render() {
    const { styles } = this.props;

    return (
      <div {...css(styles.thing)}>
        This is a thing! &nbsp;
        {this.props.children}
      </div>
    );
  }
}

export default withStyles(({ color }) => ({
  thing: {
    // minHeight: 100,
    // minWidth: 200,
    padding: 10,
    borderRadius: 10,
    border: `5px solid ${color.primary}`,
    backgroundColor: 'white',

    ':hover': {
      backgroundColor: color.secondary,
    },
  },
}))(Thing);
