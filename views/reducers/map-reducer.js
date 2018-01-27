import {
  MOVE_MARKER
} from '../constants/actionTypes';

const initialState = {
  marker:{
    lat: 31.50170 ,
    lng: 34.46684
  },
  error: undefined
};

const map = (state = initialState, action) => {
  switch (action.type) {
    case MOVE_MARKER: {
      const { lng, lat } = action.payload;

      return {
        ...state,
        marker: {
          lng: lng,
          lat: lat
        }
      };
    }
    default:
      return state;
  }
};

export default map;
