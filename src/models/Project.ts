import { ToDoItem } from "./ToDoItem";
import { User } from "./User";

export interface ProjectModel {
  id: string;
  title: string;
  description: string;
  admin: User;
  todos: [ToDoItem];
}
