import { User } from "@/models/User";

export interface ToDoItem {
  id: string;
  title: string;
  description: string;
  owner: User;
  priority: Priority;
  dueDate: Date;
}

export enum Priority {
  low = "Low",
  medium = "Medium",
  high = "High"
}

export enum monthNames {
  january = "January",
  february = "February",
  march = "March",
  april = "April",
  may = "May",
  june = "June",
  july = "July",
  august = "August",
  september = "September",
  october = "October",
  november = "November",
  december = "December"
}
