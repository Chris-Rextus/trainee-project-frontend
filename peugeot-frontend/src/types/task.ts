// src/types/task.ts

import type { Priority } from "./priority"; 

export interface Task {
  id: string;
  title: string;
  description: string;
  priority: Priority;
  dueDate: string; 
  finished: boolean;
}
