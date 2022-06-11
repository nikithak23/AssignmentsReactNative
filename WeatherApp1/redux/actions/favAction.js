
import {addFav,deleteFav,deleteAll} from '../reducers/favReducer';

export const addToFav = data => async dispatch => {
  dispatch(
    addFav({
      name:data.name,
      country:data.sys.country,
      temp:data.main.temp,
      //logo:data.weather[0].main,
      logo:data.weather[0].icon,
      desc:data.weather[0].description,
    }),
  );
};


export const deleteFromFav = Items => async dispatch => {
  dispatch(deleteFav({name:Items.name}));
};

export const deleteAllFav = Items => async dispatch => {
  dispatch(deleteAll({name:Items.name}));
};