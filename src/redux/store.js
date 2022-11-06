import { configureStore } from '@reduxjs/toolkit';
import { contactsApi } from 'redux/contacts/contactsApi';
import { filterSlice } from 'redux/contacts/filterSlice';
import { persisteAuthReducer } from './auth/authSlice';
import {
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';


export const store = configureStore({
  reducer: {
    [contactsApi.reducerPath]: contactsApi.reducer,
    filter: filterSlice.reducer,
    auth: persisteAuthReducer,
  },
  middleware: getDefaultMiddleware => [...getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
    contactsApi.middleware,],
});

export const persistor = persistStore(store);