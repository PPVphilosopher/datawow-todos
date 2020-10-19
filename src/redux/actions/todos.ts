import { createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "../../api";
import { ITask } from "../../interfaces";

export const fetchTodos = createAsyncThunk<ITask[]>("todos/fetch", async () =>
  api.todos.fetchTodos()
);
