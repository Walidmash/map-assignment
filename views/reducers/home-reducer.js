import {
  TOGGLE_SERVICES
} from '../constants/actionTypes';

const initialState = {
  isOpen: false
};

const home = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_SERVICES: {
      const newIsOpen = !state.isOpen;

      return {
        ...state,
        isOpen: newIsOpen
      };
    }
    default:
      return state;
  }
};

export default home;
