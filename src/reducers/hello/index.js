import { HELLO_INCREMENT_CLICKS } from '../types';

const initialState = {
  clicks: 0,
};

export default function thingsReducer(state = initialState, action) {
  switch (action.type) {
    case HELLO_INCREMENT_CLICKS:
      return {
        ...state,
        clicks: state.clicks + 1,
      };

    default:
      break;
  }

  return state;
}
