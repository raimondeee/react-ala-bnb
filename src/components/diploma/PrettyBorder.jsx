import React from 'react';
import PropTypes from 'prop-types';
import { withStyles, css, withStylesPropTypes } from '../../helpers/withStyles';

class PrettyBorder extends React.PureComponent {

  static propTypes = {
    ...withStylesPropTypes,
    children: PropTypes.node,
  };


  render() {
    const { styles, children } = this.props;
    return (
      <div {...css(styles.container)}>
        <link href="https://fonts.googleapis.com/css?family=Bangers|Diplomata" rel="stylesheet" />
        <header {...css(styles.header)}>
          Certificate of Achievement
        </header>
        {children}
      </div>
    );
  }
}

export default withStyles(({color}) => ({
  container: {
    margin: 20,
    padding: 20,
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    border: `1px solid #ddd`,
    background: 'url(https://i.pinimg.com/736x/36/41/bd/3641bd8a4e4342b9f67971a545f0b7ce--white-texture-background-free-paper-texture.jpg) no-repeat',
    backgroundSize: 'cover',
    boxShadow: `0 0 0 3px #fff, 0 0 0 5px #ddd, 0 0 0 10px #fff, 0 0 2px 10px #eee`,
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    overflow: 'hidden',
    userSelect: 'none'
  },

  header: {
    fontFamily: `'Diplomata', cursive`,
    fontSize: '4vmin'
  }

}))(PrettyBorder);