import * as actionTypes from './actionTypes';

export function addThing(thing) {
  return {
    type: actionTypes.ADD_THING,
    thing,
  };
}

export function promptStudentName() {
  return {
    type: actionTypes.DIPLOMA_SET_STUDENT_NAME,
    payload: window.prompt("What's your name?") || 'Anonymous',
  };
}

export function promptAchievement() {
  return (dispatch, getState) =>
    dispatch({
      type: actionTypes.DIPLOMA_SET_ACHIEVEMENT,
      payload:
        window.prompt('What did you achieve?', getState().diploma.achievement) || 'Something',
    });
}
