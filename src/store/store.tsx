import { combineReducers, configureStore } from "@reduxjs/toolkit";
import userReducer from './user/userSlice'
import { persistReducer } from 'redux-persist';
import storage from "redux-persist/lib/storage";
import persistStore from "redux-persist/es/persistStore";

const rootReducer = combineReducers({ user: userReducer })

const persitConfig = {
  key: 'root',
  version: 1,
  storage,
}


const persistEDReducer = persistReducer(persitConfig, rootReducer)

export const store = configureStore({
  reducer: persistEDReducer ,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: false,
  })
});


export const persistor = persistStore(store)