import { configureStore } from "@reduxjs/toolkit";

import { filterSlice } from './contacts/filterSlice';
import { contactApi } from './contacts/contactsSliceApi';
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
        filter: filterSlice.reducer,
    [contactApi.reducerPath]: contactApi.reducer,
      auth: persisteAuthReducer,
  },
  middleware: (getDefaultMiddleware) =>
    // getDefaultMiddleware().concat(contactApi.middleware),
    [...getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
    contactApi.middleware,],
});

export const persistor = persistStore(store);









