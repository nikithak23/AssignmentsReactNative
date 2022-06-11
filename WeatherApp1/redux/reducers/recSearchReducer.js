import {createSlice} from '@reduxjs/toolkit';

const initialRecSearchState = {items: [], totalItems: 0};

const recSearchSlice = createSlice({
  name: 'recSearch',
  initialState: initialRecSearchState,
  reducers: {

    /*
    addRecSearch: 
    (state, action) => {
        state.items = [...state.items,
          {
            name:action.payload.name,
            country:action.payload.country,
            temp:action.payload.temp,
            logo:action.payload.logo,
            desc:action.payload.desc,
          },
        ];
      },
      */
      addRecSearch:(state, action) => {
        const {name} = action.payload;
        //console.log(name);
  
        const existingIndex = state.items.findIndex(data => data.name === name);
        //console.log(existingIndex);
  
        if (existingIndex>= 0) {
          const updatedFavs = [...state.items]; //If the searched city has already been searhed previously, it will already be in search page and hence wont get added again
          //updatedFavs.splice(existingIndex, 1);
          state.items = updatedFavs;
        } else {
          state.items = state.items.concat(action.payload);//If the searched city isnt present in the search page , it gets added there
         
        }
      },




      deleteRecSearch: (state, action) => {
        state.items = state.items.filter(
          item => item.name!== action.payload.name,
        );
      },

      deleteAll: (state, action) => {
        state.items = [];
    },
      


    },
  });

export const {addRecSearch,deleteRecSearch,deleteAll} = recSearchSlice.actions;

export default recSearchSlice.reducer;
