import { UPDATE_USER, GET_USER_INFOS, saveUserInfos } from 'src/actions/user';
import api from 'src/api';
import { setLoadingFalse, setLoadingTrue } from '../actions/global';

const token = localStorage.getItem('token');
if(token) {
    api.defaults.headers.common.Authorization = `Bearer ${token}`;
}

const updateUser = (store) => (next) => (action) => {
  switch (action.type) {
    case GET_USER_INFOS: {
        store.dispatch(setLoadingTrue());
        const userId = store.getState().user.data.id;
        api
            .get(`api/v1/user/${userId}`)
            .then(
                (response) => {
                console.log('get user infos succeeded', response.data.contact);
                store.dispatch(saveUserInfos(response.data.contact));
                store.dispatch(setLoadingFalse());
                },
            )
            .catch((error) => {
              store.dispatch(setLoadingFalse());
              console.log('get user infos failed', error)
            });       
      next(action);
      break;
    }
    case UPDATE_USER: {
        const { zipCode, address, city, lastName, firstName, pseudo, email, password, holiday_mode } = store.getState().user;
        const userId = store.getState().user.data.id;
        store.dispatch(setLoadingTrue());
        api
            .patch(`api/v1/user/${userId}/update`, { zipcode: zipCode, address, city, lastname: lastName, firstname: firstName, pseudo, email, password, holiday_mode })
            .then(
                (response) => {
                console.log('update user infos succeeded', response.data);
                store.dispatch(setLoadingFalse());
                //store.dispatch(saveMessage(response.data));
                },
            )
            .catch((error) => {
              store.dispatch(setLoadingFalse());
              console.log('update user infos failed', error)
            });       
      next(action);
      break;
    }
    default:
      next(action);
  }
};

export default updateUser;