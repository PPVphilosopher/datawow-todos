import { ITask } from "../interfaces";
import { apiService } from "./apiService";

export const fetchTodos = (): Promise<ITask[]> => apiService.get("/todos");
