import api from 'src/api';
import { setLoadingFalse, setLoadingTrue } from '../actions/global';
import { ADD_TO_MY_COLLECTION, LOAD_MANGA_DATABASE, saveMangaDatabase } from '../actions/manga';

const token = localStorage.getItem('token');
if (token) {
  api.defaults.headers.common.Authorization = `Bearer ${token}`;
}

const mangaMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case LOAD_MANGA_DATABASE: {
      store.dispatch(setLoadingTrue());
      api.get('/api/v1/manga')
        .then((response) => {
          console.log('le chargement de la BDD de manga à réussi', response.data);
          store.dispatch(saveMangaDatabase(response.data));
          store.dispatch(setLoadingFalse());
        })
        .catch(
          (error) => {
            store.dispatch(setLoadingFalse());
            console.log('le chargement de la base de donnée de manga a planté', error);
          },
        );
      next(action);
      break;
    }
    case ADD_TO_MY_COLLECTION: {
      const userId = store.getState().user.data.id;
      store.dispatch(setLoadingTrue());
      api.post(`api/v1/user/${userId}/manga/`, { title: action.mangaTitle, volumes: action.volumes })
        .then((response) => {
          console.log("l'ajout à ma collection du manga a bien été réalisé", response.data);
          // ICI DISPATCH POUR STOCKER EN STATE MA COLLECTION????
          store.dispatch(setLoadingFalse());
        })
        .catch(
          (error) => {
            console.log('title & volumes ', action.mangaTitle, action.volumes);
            console.log("l'ajout à ma collection du manga a foiré", error);
            store.dispatch(setLoadingFalse());
          },
        );
      next(action);
      break;
    }
    default:
      next(action);
  }
};

export default mangaMiddleware;