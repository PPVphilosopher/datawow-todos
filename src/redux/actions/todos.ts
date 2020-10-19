import { createAsyncThunk } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";
import { api } from "../../api";
import { ITask } from "../../interfaces";

export const fetchTodos = createAsyncThunk<ITask[]>("todos/fetch", async () =>
  api.todos.fetchTodos()
);

export const createTodo = createAsyncThunk<ITask, string>(
  "todos/create",
  async (title) => {
    const task: ITask = {
      id: uuidv4(),
      completed: false,
      title,
    };

    return api.todos.createTodo(task);
  }
);

export const deleteTodo = createAsyncThunk<{}, string>(
  "todo/delete",
  async (id) => api.todos.deleteTodo(id)
);

export const updateTodo = createAsyncThunk<ITask, ITask>(
  "todo/update",
  async (task) => api.todos.updateTodo(task)
);
