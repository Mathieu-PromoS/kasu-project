/* eslint-disable linebreak-style */
/* eslint-disable import/named */
/* eslint-disable linebreak-style */
/* eslint-disable max-len */
import {
  CHANGE_THEME, CHANGE_OBJECT, CHANGE_CONTENT, SAVE_MESSAGE, ERASE_MESSAGE, SUBMIT_FORM, SET_LOADING_TRUE, SET_LOADING_FALSE, LOGOUT_USER, CHANGE_EMAIL, REDIRECT, LOGOUT_GLOBAL,
} from '../actions/global';

export const initialState = {
  theme: 'theme1',
  navIcons: 'black',
  email: '',
  object: '',
  content: '',
  message: '',
  loading: false,
  picture: '',
  redirectLink: '',
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_THEME:
      return {
        ...state,
        theme: action.themeName,
        navIcons: action.navIconsColor,
      };
    case CHANGE_EMAIL:
      return {
        ...state,
        email: action.email,
      };
    case CHANGE_OBJECT:
      return {
        ...state,
        object: action.object,
      };
    case CHANGE_CONTENT:
      return {
        ...state,
        content: action.content,
      };
    case SAVE_MESSAGE:
      return {
        ...state,
        message: action.message,
      };
    case ERASE_MESSAGE:
      return {
        ...state,
        message: '',
      };
    case SUBMIT_FORM:
      return {
        ...state,
        object: '',
        content: '',
      };
    case SET_LOADING_TRUE:
      return {
        ...state,
        loading: true,
      };
    case SET_LOADING_FALSE:
      return {
        ...state,
        loading: false,
      };
    case REDIRECT:
      return {
        ...state,
        redirectLink: action.link,
      };
    case LOGOUT_USER:
      return {
        theme: 'theme1',
        navIcons: 'black',
        email: '',
        object: '',
        content: '',
        message: '',
        loading: false,
        picture: '',
        redirectLink: '',
      };
    case LOGOUT_GLOBAL:
      return {
        theme: 'theme1',
        navIcons: 'black',
        email: '',
        object: '',
        content: '',
        message: '',
        loading: false,
        picture: '',
        redirectLink: '',
      };
    default:
      return state;
  }
};
export default reducer;
