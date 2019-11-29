import {SET_FIELD} from '../actions/newSerieFormActions';

export default function(state = {}, action) {
  switch (action.type) {
    case SET_FIELD:
      return '';
    default:
      return {};
  }
}
