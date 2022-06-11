import {addFav} from '../reducers/favReducer';

export const addToFav = data => async dispatch => {
  dispatch(
    addFav({
      name:data.name,
      country:data.sys.country,
      temp:data.main.temp,
      logo:data.weather[0].main,
      desc:data.weather[0].description,
    }),
  );
};


/*
export const deleteOldItem = id => async dispatch => {
  dispatch(deleteItem({id: id}));
};
*/