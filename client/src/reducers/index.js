import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
/* --- Components --- */
import modal from './modalReducer';
import httpHandler from './HTTPHandlerReducer';
import message from './messageReducer';
import auth from './authReducer';
import keepUserLoggedIn from './keepMeLoggedInReducer';
import isAdminVerified from './isAdminVerifiedReducer';
import selected from './selectedReducer';

export default history =>
  combineReducers({
    router: connectRouter(history),
    modal,
    httpHandler,
    message,
    auth,
    keepUserLoggedIn,
    isAdminVerified,
    selected,
  });
