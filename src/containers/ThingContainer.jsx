import React from 'react';
import ThingList from '../components/ThingList';
import Button from '../components/Button';
import { addThing } from '../helpers/actionCreators';
import { connect } from 'react-redux';

class ThingContainer extends React.PureComponent {

  addThing = () => {
    this.props.dispatch(addThing(
      Date.now()
    ));
  };

  render() {
    return (
      <div>
        <ThingList things={this.props.things} />
        <Button onClick={this.addThing}>add a thing</Button>
        <Button onClick={this.addThing} disabled>add a thing</Button>
      </div>
    );
  }
}

export default connect(state => ({
  things: state.things.list
}))(ThingContainer);