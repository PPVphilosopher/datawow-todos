import { createSlice } from "@reduxjs/toolkit";
import { IAsyncReduxData, ITask } from "../../interfaces";
import { createTodo, fetchTodos, deleteTodo, updateTodo } from "../actions";

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

    [deleteTodo.pending.type]: (state) => {
      state.isLoading = true;
    },
    [deleteTodo.fulfilled.type]: (state, action) => ({
      data: (state.data || []).filter((task) => task.id !== action.meta.arg),
      isLoading: false,
      error: undefined,
    }),
    [deleteTodo.rejected.type]: (state, action) => ({
      ...state,
      isLoading: false,
      error: action.error,
    }),

    [updateTodo.pending.type]: (state) => {
      state.isLoading = true;
    },
    [updateTodo.fulfilled.type]: (state, action) => {
      const newList = (state.data || []).map((task) => {
        if (task.id === action.meta.arg.id) {
          return { ...task, ...action.payload };
        } else {
          return task;
        }
      });

      return {
        data: newList,
        isLoading: false,
        error: undefined,
      };
    },
    [updateTodo.rejected.type]: (state, action) => ({
      ...state,
      isLoading: false,
      error: action.error,
    }),
  },
});
