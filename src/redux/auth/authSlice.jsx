import { createSlice } from '@reduxjs/toolkit';
import authOperetions from './authOperations';
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
    extraReducers: {
      [authOperetions.register.fulfilled](state, action) {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
      },
      [authOperetions.logIn.fulfilled](state, action) {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
      },
      [authOperetions.logOut.fulfilled](state, _) {
        state.user = { name: null, email: null };
        state.token = null;
        state.isLoggedIn = false;
      },
      [authOperetions.refreshCurrentUser.pending](state) {
      state.isRefreshing = true;
      },
      

      [authOperetions.refreshCurrentUser.rejected](state) {
      state.isRefreshing = false;
      },
    
      [authOperetions.refreshCurrentUser.fulfilled](state, action) {
      state.user = action.payload;
        state.isLoggedIn = true;
        state.isRefreshing = false;
      },
      
    },
});

export const persisteAuthReducer = persistReducer(
  authPersistConfig,
  authSlice.reducer,
);
  
 