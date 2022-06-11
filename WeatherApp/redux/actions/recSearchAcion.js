import {addRecSearch} from '../reducers/recSearchReducer';

export const addToRecSearch = data => async dispatch => {
  dispatch(
    addRecSearch({
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