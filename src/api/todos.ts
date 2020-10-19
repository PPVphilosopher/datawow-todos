import { ITask } from "../interfaces";
import { apiService } from "./apiService";

export const fetchTodos = (): Promise<ITask[]> => apiService.get("/todos");

export const createTodos = (task: ITask): Promise<ITask> =>
  apiService.post("/todos", task);
