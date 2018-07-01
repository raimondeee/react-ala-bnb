import { HELLO_INCREMENT_CLICKS } from '../types';

const initialState = {
  clicks: 0,
};

export default function thingsReducer(state = initialState, action) {
  switch (action.type) {
    case HELLO_INCREMENT_CLICKS:
      return {
        ...state,
        clicks: state.clicks + action.count,
      };

    default:
      break;
  }

  return state;
}
