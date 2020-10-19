import { createAsyncThunk } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";
import { api } from "../../api";
import { ITask } from "../../interfaces";

export const fetchTodos = createAsyncThunk<ITask[]>("todos/fetch", async () =>
  api.todos.fetchTodos()
);

export const createTodo = createAsyncThunk<ITask, string>(
  "todos/create",
  async (title, thunkAPI) => {
    const task: ITask = {
      id: uuidv4(),
      completed: false,
      title,
    };

    const result = await api.todos.createTodos(task);

    if (result.id === task.id) {
      return result;
    } else {
      return thunkAPI.rejectWithValue(result);
    }
  }
);
