import { dispatch } from "../store";
import { setSearchQuery } from "../features/generalSlice";

export const setSearchQueryAction = (query: string) => {
  dispatch(setSearchQuery(query));
};
