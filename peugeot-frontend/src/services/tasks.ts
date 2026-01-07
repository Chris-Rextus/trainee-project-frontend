// src/services/tasks.ts

import type { Task } from "../types/task";

export const fetchTasks = async (): Promise<Task[]> => {
  return [
    {
      id: "1",
      title: "Implement Priority Dropdown",
      description: "Finish implementing the priority dropdown component.",
      priority: "high",
      dueDate: "2026-01-10",
      finished: false,
    },
    {
      id: "2",
      title: "Completed task example",
      description: "This task has already been completed.",
      priority: "low",
      dueDate: "2026-01-01",
      finished: true,
    },
  ];
};
