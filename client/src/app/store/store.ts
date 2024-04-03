import { configureStore } from '@reduxjs/toolkit';
import Lists from '../../shared/lib/slices/Lists';
import Tasks from '../../shared/lib/slices/Tasks';

export default configureStore({
    reducer: {
        Lists: Lists,
        Tasks: Tasks,
    }
})