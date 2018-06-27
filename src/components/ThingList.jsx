import React from "react";
import PropTypes from "prop-types";
import { withStyles, css, withStylesPropTypes } from "../helpers/withStyles";

import Thing from "./Thing";

class ThingList extends React.Component {
  static propTypes = {
    ...withStylesPropTypes,
    things: PropTypes.array.isRequired
  };

  render() {
    const { styles } = this.props;

    return (
      <ul {...css(styles.container)}>
        {this.props.things.map((thing, i) => (
          <li key={i} {...css(styles.item)}>
            <Thing>{thing}</Thing>
          </li>
        ))}
      </ul>
    );
  }
}

export default withStyles(({ color }) => ({
  container: {
    padding: 0,
    display: "flex"
  },

  item: {
    flex: "1",
    display: "flex",
    justifyContent: "center",
    listStyleType: "none",
    backgroundColor: color.secondary,
    padding: 10,
    margin: 1
  }
}))(ThingList);
