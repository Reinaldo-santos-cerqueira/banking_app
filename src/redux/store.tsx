import { configureStore } from '@reduxjs/toolkit';
import loginSlice from './loginSlice';

const store = configureStore({
    reducer: {
        login: loginSlice,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export {store};
