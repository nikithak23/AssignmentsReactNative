import {addNote, deleteNote} from '../reducers/noteReducer';

export const addNewNote = newNote => async dispatch => {
  dispatch(addNote({note: newNote, id: new Date().toString()}));
};

export const deleteOldNote = id => async dispatch => {
  dispatch(deleteNote({id: id}));
};
