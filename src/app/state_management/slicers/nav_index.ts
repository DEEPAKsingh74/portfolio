import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface IndexState {
	index: number
}

const initialState: IndexState = {
	index: 0
};

const indexSlice = createSlice({
	name: 'index',
	initialState,
	reducers: {
		setIndex: (state, action: PayloadAction<number>) => {
			state.index = action.payload;
		}
	},
});

export const { setIndex } = indexSlice.actions;

export default indexSlice.reducer;
