import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface GeneralState {
  searchQuery: string;
}

const initialState: GeneralState = {
  searchQuery: "",
};

export const generalSlice = createSlice({
  name: "general",
  initialState,
  reducers: {
    setSearchQuery: (state, action: PayloadAction<string>) => {
      state.searchQuery = action.payload;
    },
  },
});

export const { setSearchQuery } = generalSlice.actions;

export default generalSlice.reducer;
