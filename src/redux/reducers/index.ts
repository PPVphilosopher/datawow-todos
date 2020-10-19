import { combineReducers } from "@reduxjs/toolkit";
import { todosSlice } from "./todos";

export const rootReducer = combineReducers({
  todos: todosSlice.reducer,
});

export type TRootState = ReturnType<typeof rootReducer>;
