// src/types/taskList.ts

import type { Task } from "./task";

export interface TaskList {
  id: string;
  name: string;
  tasks: Task[];
}
