
import {createSlice} from '@reduxjs/toolkit';

const initialFavState = {items: [], totalItems: 0};

const favSlice = createSlice({
  name: 'fav',
  initialState: initialFavState,
  reducers: {
    /*
    addFav: (state, action) => {
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
      addFav:(state, action) => {
        const {name} = action.payload;
        console.log(name);
  
        const existingIndex = state.items.findIndex(data => data.name === name);
        console.log(existingIndex);
  
        if (existingIndex>= 0) {
          const updatedFavs = [...state.items];
          updatedFavs.splice(existingIndex, 1);//If you try to fav the city while its already present in fav page, it gets deleted from fav page
         

          state.items = updatedFavs;
        } else {
          state.items = state.items.concat(action.payload);//If you try to fav the city while its not present in fav page, it gets added to fav page
         
        }
      },

      deleteFav: (state, action) => {
          state.items = state.items.filter(
            item => item.name!== action.payload.name,
          );
        },

        deleteAll: (state, action) => {
            state.items = [];
        },
  
    },
  });

export const {addFav,deleteFav,deleteAll} = favSlice.actions;

export default favSlice.reducer;





