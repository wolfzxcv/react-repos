import { Action, configureStore, ThunkAction } from '@reduxjs/toolkit';
// eslint-disable-next-line import/no-cycle
import norwegianSchoolsReducer from '../slice/norwegianSchoolsSlice';

export const store = configureStore({
  reducer: {
    norwegianSchools: norwegianSchoolsReducer
  }
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
