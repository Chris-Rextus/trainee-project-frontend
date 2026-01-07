// src/utils/tasks.ts

export const isLate = (dueDate: string) => {
  return new Date(dueDate) < new Date();
};