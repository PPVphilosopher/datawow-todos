import { ITask } from "../interfaces";
import { apiService } from "./apiService";

export const fetchTodos = (): Promise<ITask[]> => apiService.get("/todos");

export const createTodo = (task: ITask): Promise<ITask> =>
  apiService.post("/todos", task);

export const deleteTodo = (id: string): Promise<{}> =>
  apiService.delete(`/todos/${id}`);
