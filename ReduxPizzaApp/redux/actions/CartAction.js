import {addItem, deleteItem} from '../reducers/CartReducer';

export const addNewItem = (id, name, image, price) => async dispatch => {
  dispatch(
    addItem({
      id: id,
      name: name,
      image: image,
      price: price,
    }),
  );
};

export const deleteOldItem = id => async dispatch => {
  dispatch(deleteItem({id: id}));
};
