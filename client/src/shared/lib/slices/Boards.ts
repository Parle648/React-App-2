import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Board {
  id: number;
  name: string;
}

interface BoardsState {
  value: Board[];
}

const initialState: BoardsState = {
  value: [],
};

const Boards = createSlice({
  name: 'Boards',
  initialState,
  reducers: {
    setBoards(state, action: PayloadAction<Board[]>) {
      state.value = action.payload;
    },
  }
})

export const { setBoards } = Boards.actions;

export default Boards.reducer;
