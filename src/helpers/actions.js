import { HELLO_INCREMENT_CLICKS } from '../constants';

export function incrementClick(count = 1) {
  return {
    type: HELLO_INCREMENT_CLICKS,
    count,
  };
}

export function anotherAction() {
  return {};
}
