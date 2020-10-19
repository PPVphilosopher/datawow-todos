import { createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "../../api";
import { ITask } from "../../interfaces";

export const fetchTodos = createAsyncThunk<ITask[]>("todos/fetch", async () =>
  api.todos.fetchTodos()
);

export const createTodo = createAsyncThunk<ITask, ITask>(
  "todos/create",
  async (task, thunkAPI) => {
    const result = await api.todos.createTodos(task);
    if (result.id === task.id) {
      return result;
    } else {
      return thunkAPI.rejectWithValue(result);
    }
  }
);
