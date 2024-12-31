import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { api } from './api/api';
import indexReducer from './slicers/nav_index';

const rootReducer = combineReducers({
  index: indexReducer, // Manages general information state
  [api.reducerPath]: api.reducer, // Manages RTK Query API state
});

// Export a function to create the store dynamically
export const makeStore = () =>
  configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(api.middleware), // Adds middleware for RTK Query
    devTools: process.env.NODE_ENV !== 'production', // Enables Redux DevTools in development mode
  });

export const store = makeStore(); // If you need a static store instance

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];
