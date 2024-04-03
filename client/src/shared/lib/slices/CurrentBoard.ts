import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Board {
  id: number;
  name: string;
}

interface BoardState {
  value: Board[];
}

const initialState: BoardState = {
  value: [],
};

const CurrentBoard = createSlice({
  name: 'CurrentBoard',
  initialState,
  reducers: {
    setBoard(state, action: PayloadAction<Board[]>) {
      state.value = action.payload;
    },
  }
})

export const { setBoard } = CurrentBoard.actions;

export default CurrentBoard.reducer;
