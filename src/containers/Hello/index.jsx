import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import HelloBtn from '../../components/HelloBtn';
import { incrementClick, decrementClick } from '../../helpers/actions';

class HelloContainer extends React.PureComponent {
  static propTypes = {
    clicks: PropTypes.number.isRequired,
    incrementClick: PropTypes.func.isRequired,
    decrementClick: PropTypes.func.isRequired,
  };

  handleClickUp = () => {
    this.props.incrementClick();
  };

  handleClickDown = () => {
    this.props.decrementClick();
  };

  render() {
    const { clicks } = this.props;

    return (
      <>
        <h1>Hello world! clicks={clicks}</h1>
        <HelloBtn onClick={this.handleClickUp}>&uarr;</HelloBtn>
        <HelloBtn onClick={this.handleClickDown}>&darr;</HelloBtn>
      </>
    );
  }
}

export default connect(
  state => ({
    clicks: state.hello.clicks,
  }),
  {
    incrementClick,
    decrementClick,
  },
)(HelloContainer);
