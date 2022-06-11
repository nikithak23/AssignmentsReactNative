import {addRecSearch, deleteRecSearch,deleteAll} from '../reducers/recSearchReducer';

export const addToRecSearch = data => async dispatch => {
  dispatch(
    addRecSearch({
      name:data.name,
      country:data.sys.country,
      temp:data.main.temp,
      //logo:data.weather[0].main,
      logo:data.weather[0].icon,
      desc:data.weather[0].description,
    }),
  );
};


export const deleteFromRecSearch = Items => async dispatch => {
  dispatch(deleteRecSearch({name:Items.name}));
};

export const deleteAllRecSearch = Items => async dispatch => {
  dispatch(deleteAll({name:Items.name}));
};