import { createSlice } from "@reduxjs/toolkit";
import { IAsyncReduxData, ITask } from "../../interfaces";
import { createTodo, fetchTodos } from "../actions";

export interface ITodosState extends IAsyncReduxData<ITask[]> {}

const initialState: ITodosState = {};

export const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {},
  extraReducers: {
    [fetchTodos.pending.type]: (state) => {
      state.isLoading = true;
    },
    [fetchTodos.fulfilled.type]: (_, action) => ({
      data: action.payload,
      isLoading: false,
      error: undefined,
    }),
    [fetchTodos.rejected.type]: (_, action) => ({
      data: undefined,
      isLoading: false,
      error: action.error,
    }),

    [createTodo.pending.type]: (state) => {
      state.isLoading = true;
    },
    [createTodo.fulfilled.type]: (state, action) => ({
      data: [...(state.data || []), action.payload],
      isLoading: false,
      error: undefined,
    }),
    [createTodo.rejected.type]: (state, action) => ({
      ...state,
      isLoading: false,
      error: action.error,
    }),
  },
});
