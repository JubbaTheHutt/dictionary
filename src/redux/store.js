import { configureStore } from '@reduxjs/toolkit';
import mainSlice from './mainSlice.js';

export default configureStore({
    reducer: { mainSlice },
});
