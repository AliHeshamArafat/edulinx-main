import { dispatch } from "../store";
import { setRegisterData, setSelectedCountryId, updateRegisterData } from "../features/registerSlice";
import { RegisterData } from "@/types/auth";

export const setRegisterDataAction = (registerData: RegisterData) => {
  dispatch(setRegisterData(registerData));
};

export const updateRegisterDataAction = (registerData: Partial<RegisterData>) => {
  dispatch(updateRegisterData(registerData));
};

export const setSelectedCountryIdAction = (selectedCountryId: string) => {
  dispatch(setSelectedCountryId(selectedCountryId));
};
