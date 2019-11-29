import {combineReducers} from 'redux';

import userReducer from './userReducer';
import newSerieForm from './newSerieForm';

export default combineReducers({
  user: userReducer,
  serieForm: newSerieForm,
});
