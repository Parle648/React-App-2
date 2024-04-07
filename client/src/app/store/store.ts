import { configureStore } from '@reduxjs/toolkit';
import Lists from '../../shared/lib/slices/Lists';
import Tasks from '../../shared/lib/slices/Tasks';
import CurrentBoard from '../../shared/lib/slices/CurrentBoard';
import Boards from '../../shared/lib/slices/Boards';

export default configureStore({
    reducer: {
        Lists: Lists,
        Tasks: Tasks,
        CurrentBoard: CurrentBoard,
        Boards: Boards,
    }
})