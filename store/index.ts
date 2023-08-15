import {configureStore} from "@reduxjs/toolkit";

import filtersReducer from './slices/filters'
import platformsReducer from './slices/platforms'

export const store = configureStore({
    reducer: {
        filters: filtersReducer,
        platforms: platformsReducer
    }
})


export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
