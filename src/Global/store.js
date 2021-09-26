import { configureStore } from '@reduxjs/toolkit';
import reducerOfSafePanel from '../pages/SafePanel/SafePanel.slice';

export const store = configureStore({
  reducer: {
    safePanel: reducerOfSafePanel,
  },
});
