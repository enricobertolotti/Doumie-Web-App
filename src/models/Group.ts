import { ProjectModel } from "./Project";

export interface GroupModel {
  id: string;
  title: string;
  description: string;
  projects: [ProjectModel];
}
