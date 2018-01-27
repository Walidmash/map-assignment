import {
  MOVE_MARKER
} from '../constants/actionTypes';

export const moveMarker = (lng, lat) => {
  return {
    type: MOVE_MARKER,
    payload: { lng, lat }
  };
};
