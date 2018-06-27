import { DIPLOMA_SET_ACHIEVEMENT, DIPLOMA_SET_STUDENT_NAME } from '../../helpers/actionTypes';

const initialState = {
  studentName: 'Someone',
  achievement: 'Big-Brains 201 React+JavaScript',
};

export default function diplomaReducer(state = initialState, action) {
  
  switch (action.type) {
    case DIPLOMA_SET_ACHIEVEMENT:
      return {
        ...state,
        achievement: action.payload,
      };

    case DIPLOMA_SET_STUDENT_NAME:
      return {
        ...state,
        studentName: action.payload,
      };
  }

  return state;
}