import * as firebase from 'firebase';

export const SET_FIELD = 'SET_FIELD';

export const setField = (field, value) => {
  return {
    type: SET_FIELD,
    field,
    value,
  };
};

export const saveSerie = serie => {
  const {currentUser} = firebase.auth();
  const db = firebase
    .database()
    .ref(`/users/${currentUser.displayName}/series`);

  console.log('serie que vai ser salva', serie);
};
