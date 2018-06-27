import React from "react";
import PropTypes from "prop-types";
import { connect, dispatch } from "react-redux";
import PrettyBorder from "../components/diploma/PrettyBorder";
import StudentName from "../components/diploma/StudentName";
import Achievement from "../components/diploma/Achievement";
import * as actionCreators from "../helpers/actionCreators";

class DiplomaContainer extends React.PureComponent {
  static propTypes = {
    achievement: PropTypes.string,
    studentName: PropTypes.string,
    promptStudentName: PropTypes.func.isRequired,
    promptAchievement: PropTypes.func.isRequired
  };

  render() {
    const {
      achievement,
      studentName,
      promptStudentName,
      promptAchievement
    } = this.props;
    return (
      <PrettyBorder>
        <StudentName onClick={promptStudentName}>{studentName}</StudentName>
        <Achievement onClick={promptAchievement}>{achievement}</Achievement>
      </PrettyBorder>
    );
  }
}

export default connect(
  ({ diploma }) => ({
    ...diploma
  }),
  actionCreators
)(DiplomaContainer);
