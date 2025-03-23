import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RegisterData } from "@/types/auth";

interface RegisterState {
  registerData: RegisterData | null;
  selectedCountryId: string | null;
}

const initialState: RegisterState = {
  registerData: null,
  selectedCountryId: null,
};

export const registerSlice = createSlice({
  name: "register",
  initialState,
  reducers: {
    setRegisterData: (state, action: PayloadAction<RegisterData>) => {
      state.registerData = action.payload;
    },
    updateRegisterData: (state, action: PayloadAction<Partial<RegisterData>>) => {
      if (state.registerData) state.registerData = { ...state.registerData, ...action.payload } as RegisterData;
    },
    setSelectedCountryId: (state, action: PayloadAction<string>) => {
      state.selectedCountryId = action.payload;
    },
  },
});

export const { setRegisterData, setSelectedCountryId, updateRegisterData } = registerSlice.actions;

export default registerSlice.reducer;
