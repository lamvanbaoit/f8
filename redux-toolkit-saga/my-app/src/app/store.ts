import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import createSagaMiddleware from "redux-saga";
import rootSaga from './rootSaga';

const sagaMiddleware = createSagaMiddleware();

// Store
export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
  // mục đích là tôi thêm middleware của redux-toolkit và thêm middleware của redux-saga 
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      // mặt định ko để là true hết
      thunk: true,
      serializableCheck: true,
      immutableCheck: true,
    }).concat(sagaMiddleware),
});

sagaMiddleware.run(rootSaga);

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
