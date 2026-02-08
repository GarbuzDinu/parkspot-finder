import {configureStore} from '@reduxjs/toolkit'
import parkSlotReducer from "./reducers/parkSlotReducer";

export const store = configureStore({
  reducer: {
    parkSlot: parkSlotReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;