import {} from '../actions';
import series from '../../series.json';

const INITIAL_STATE = series;

export default function(state = INITIAL_STATE, action) {
  return state;
}
