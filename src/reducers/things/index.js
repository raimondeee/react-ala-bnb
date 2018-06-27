import { ADD_THING } from '../../helpers/actionTypes';

const initialState = {
  list: ['hello world'],
};

export default function thingsReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_THING:
      return {
        ...state,
        list: [].concat(state.list, [action.thing]),
      };
  }

  return state;
}
