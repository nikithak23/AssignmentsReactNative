import {createSlice} from '@reduxjs/toolkit';

// Slice

const initialUser = [];

const slice = createSlice({
  name: 'not',
  initialState: {
    noteArr: initialUser,
  },
  reducers: {
    addNote: (state, action) => {
      state.noteArr = [
        ...state.noteArr,
        {
          id: action.payload.id,
          note: action.payload.note,
        },
      ];
    },
    deleteNote: (state, action) => {
      const newNotesArr = state.noteArr;
      const indexToDelete = newNotesArr.findIndex(
        note => note.id === action.payload.id,
      );

      newNotesArr.splice(indexToDelete, 1);

      state.noteArr = newNotesArr;
    },
  },
});

export default slice.reducer;

// Actions

export const {addNote, deleteNote} = slice.actions;
